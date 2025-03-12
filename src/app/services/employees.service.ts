import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/request'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch all employees
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new employee
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }

  //Get a single employee by ID
  getEmployeeById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //Update an existing employee
  updateEmployee(id:number, employeeData: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`, employeeData);
  }
}
