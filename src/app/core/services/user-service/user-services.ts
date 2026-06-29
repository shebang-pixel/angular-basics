import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/user.model';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    )
  }
}
