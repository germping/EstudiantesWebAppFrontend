import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.apiUrl + 'user/';

  constructor(private http:HttpClient) { }

  startSesion(request: Login):Observable<Sesion>{
    //return this.http.post<Sesion>(environment.apiUrl + 'login', request);
    return this.http.post<Sesion>(`${this.baseUrl}login`, request);
  }
}
