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
  constructor(private employeeService: EmployeeService,private http : HttpClient, private router: Router){
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

  deleteEmployee(id: number){
    
  }
  // loadEmployee(){
  //   this.employeeService.getEmployees().subscribe((res:any)=>{
  //     this.employeeInfo=res;
  //   })
  // }
}
