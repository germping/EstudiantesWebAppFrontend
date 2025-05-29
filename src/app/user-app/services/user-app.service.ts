import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserApp } from '../../user-app/interfaces/user-app';
import { ApiResponse } from '../../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserAppService {

  baseUrl: string = environment.apiUrl + 'UserApp/';
    constructor(private http: HttpClient) { }
  
    list(): Observable<ApiResponse>{
      return this.http.get<ApiResponse>(`${this.baseUrl}`);
    }
    create(request: UserApp):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
    }
    update(request: UserApp):Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.baseUrl}`, request);
    }
    delete(id: number):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
    }
  
}

