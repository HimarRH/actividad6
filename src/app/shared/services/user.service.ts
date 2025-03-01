import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl =  'https://peticiones.online/api/users';

  constructor( private readonly http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getUserByID(id: string) : Observable<any>{
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user._id}`, user);
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
