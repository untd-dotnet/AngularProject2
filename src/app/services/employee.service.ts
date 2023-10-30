import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'https://localhost:7007';
  constructor(private http: HttpClient) { }


  login(data): Observable<any> {
    return this.http.post(this.baseUrl + '/api/Auth/login', data, { responseType: "text" });
  }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + '/api/employees', addEmployeeRequest);
  }

  deleteEmployee(id: number) :Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl + '/api/employees/' + id);
  }
}
