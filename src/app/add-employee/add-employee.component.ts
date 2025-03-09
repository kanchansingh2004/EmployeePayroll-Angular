import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employees.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  imports: [FormsModule] // Required for ngModel
})
export class AddEmployeeComponent {
  employee = {
    name: '',
    gender: '',
    department: '',
    salary: '',
    startDate: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private http: HttpClient
  ) {}

  addEmployee() {
    debugger;
    this.http.post("http://localhost:8080/request",this.employee).subscribe((res:any) => {
      debugger;
      if(res == true){
        alert("Employee details saved!!!");
      }else{
        alert("Details cannot be saved for some reason!!!")
      }
    })
  }
}
