import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId!:number;
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
      private route: ActivatedRoute,
      private http: HttpClient
    ) {}
  
    ngOnInit() {
        this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

        this.employeeService.getEmployeeById(this.employeeId).subscribe({
          next: (data) => {
            this.employee = data;
          },
          error: ()=>{
            alert("Error while fetching employee details.");
            this.router.navigateByUrl('/');
          }
        });
    }

    updateEmployee() {
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe({
        next: () => {
          alert("Employee updated successfully!!");
          this.router.navigateByUrl("/");
        },
        error:()=>{
          alert("Something went wrong!");
        }
      });
    }
}
