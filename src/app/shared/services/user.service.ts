import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl =  'https://peticiones.online/api/users';

  constructor( private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
