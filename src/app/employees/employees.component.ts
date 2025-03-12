import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employees.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
  standalone: true,
  providers: [DatePipe]
})
export class EmployeesComponent {
  employeeInfo: any [] = [];
  noImageUrl = "../assets/299106_profile_icon.png";
  constructor(private employeeService: EmployeeService,private http : HttpClient, private router: Router){
    this.getInformation();
  }
  getInformation(){
    this.http.get("http://localhost:8080/request").subscribe((result:any) => {
      this.employeeInfo = result;
    });
  }

  navigateToAddEmployee() {
    this.router.navigateByUrl('/add');
  }

  updateEmployee(id:number){
    this.router.navigate(['/update', id]);
  }

  deleteEmployee(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.http.delete('http://localhost:8080/request/' + id).subscribe({
        complete: () => {
          alert('Employee deleted successfully');
          this.getInformation(); // Fetch updated employee list
        },
        error: (error) => {
          console.error('Error deleting employee from server', error);
        },
      });
    }
  }  
}
