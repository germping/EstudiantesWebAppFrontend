import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../interfaces/api-response';
import { Relations } from '../interfaces/relations';

@Injectable({
  providedIn: 'root'
})
export class RelationsAppService {

  baseUrl: string = environment.apiUrl + 'Relation/';
    constructor(private http: HttpClient) { }
  
    listStudents(): Observable<ApiResponse>{
      return this.http.get<ApiResponse>(`${this.baseUrl}`);
    }
    create(request: Relations):Observable<ApiResponse>{
      return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
    }
    update(request: Relations):Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.baseUrl}`, request);
    }
    delete(id: number):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
    }
}
