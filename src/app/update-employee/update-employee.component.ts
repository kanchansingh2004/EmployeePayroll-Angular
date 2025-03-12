import { Component } from '@angular/core';
import { EmployeeService } from '../services/employees.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class UpdateEmployeeComponent {
  employee = {
      name: '',
      gender: '',
      department: '',
      salary: '',
      startDate: '',
      profile_pic:''
    };
  
    constructor(
      private employeeService: EmployeeService,
      private router: Router,
      private http: HttpClient
    ) {}
  
    updateEmployee() {
      console.log("adding Employee------",this.employee);
      this.http.post("http://localhost:8080/request",this.employee).subscribe({complete:() => {this.router.navigateByUrl('/') }, error:() =>{alert("Something went wrong!!")}})
    }
}
