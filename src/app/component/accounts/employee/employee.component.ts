import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { Employees } from '../../../model/employees';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{
  employees: Employees[]=[];
  // empId:any;
  empName:any;
  empEmailId:any;
  empDesignation:any;
  empContactNo:any;
  empCode:any;
  role:any;
//  items:any[]=[];
  constructor(private api:EmployeeService){}
  ngOnInit(): void {
    this.getemployee();
    // console.log(this.getemployee);
  }
  getemployee():void{
    this.api.getemployee().subscribe((res)=>{
      this.employees=res;
      // this.employees=Array.isArray(res)? res: Object.values(res);
      console.log(this.employees);
    });
  }
}
