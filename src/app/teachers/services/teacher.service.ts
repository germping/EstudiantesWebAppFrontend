import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseUrl: string = environment.apiUrl + 'Teacher/';
    constructor(private http: HttpClient) { }
  
    list(): Observable<ApiResponse>{
      return this.http.get<ApiResponse>(`${this.baseUrl}`);
    }
    create(request: Teacher):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
    }
    update(request: Teacher):Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.baseUrl}`, request);
    }
    delete(id: number):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
    }
}
