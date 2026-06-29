import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-users-form',
  imports: [ReactiveFormsModule],
  templateUrl: './users-form.html',
  styleUrl: './users-form.css',
})
export class UsersForm {
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    website: new FormControl('', [
      Validators.required,
    ]),
    company: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('', [
      Validators.required
    ])
  });

  userAdded = output<User>()

  onSubmit() {
    console.log('Submitting form....');
    if (this.userForm.invalid) {
      return;
    }

    const user: User = {
      name: this.userForm.value.name ?? '',
      username: this.userForm.value.username ?? '',
      email: this.userForm.value.email ?? '',
      phone: this.userForm.value.phone ?? '',
      website: this.userForm.value.website ?? '',
      company: this.userForm.value.company ?? '',
    };

    console.log('user emitted')
    this.userAdded.emit(user);
    console.log(user);
    console.log('reseting form...');
    this.userForm.reset()

  }
}
