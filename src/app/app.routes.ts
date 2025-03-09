import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
export const routes: Routes = [
    {
        path : "",
        component : EmployeesComponent
    },
    {
        path: "add",
        component: AddEmployeeComponent
    }
];
