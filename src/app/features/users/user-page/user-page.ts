import { Component, computed, inject, signal } from '@angular/core';
import { UserServices } from '../../../core/services/user-service/user-services';
import { User } from '../../../core/models/user.model';
import { UserCard } from '../user-card/user-card';
import { UsersForm } from '../users-form/users-form';

@Component({
  selector: 'app-user-page',
  imports: [UserCard, UsersForm],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  // page states
  users = signal<User[]>([]);
  loading = signal(true);
  error = signal('');

  // inject user service
  private userService = inject(UserServices);
  userCount = computed(
    () => this.users().length
  );

  // get user
  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe({
        next: data => {
          this.users.set(data);
          this.loading.set(false)
        },
        error: err => {
          this.error.set("Failed to load Users.Check your internet connection!");
          this.loading.set(false);
        }
      })
  }

  // add user
  onUserAdded(user: User) {
    console.log(user);
    this.users.update(users => [
      ...users,
      user
    ])

  }




}
