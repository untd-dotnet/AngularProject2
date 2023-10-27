import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  /*baseUrl: string = 'https://localhost:7007';*/
  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post('https://localhost:7007/api/Auth/login', data, { responseType:"text" });
  }
  
}

