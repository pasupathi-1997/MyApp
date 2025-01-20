import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../../../service/employee.service';
import { Employees } from '../../../../model/employees';

@Component({
  selector: 'app-editemployee',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './editemployee.component.html',
  styleUrl: './editemployee.component.scss'
})
export class EditemployeeComponent implements OnInit{
editEmployee:FormGroup|any;
public employeeid!:any;
public employeedata!:Employees;
formsubmitted:boolean=false;
constructor(private formbuilder:FormBuilder, private api:EmployeeService, private router:Router, private activaterouter:ActivatedRoute){
  this.editEmployee=this.formbuilder.group({
    empName:new FormControl(''),
    empEmailId:new FormControl(''),
    empDesignation:new FormControl(''),
    empContactNo:new FormControl(''),
    empCode:new FormControl(''),
    role:new FormControl('')
    // empyear:new FormControl(''),
    // empmonth:new FormControl(''),
    // empaddress:new FormControl(''),
    // empcity:new FormControl(''),
    // empstate:new FormControl(''),
    // emppincode:new FormControl('')
  })
}
ngOnInit(): void {
this.activaterouter.params.subscribe((param:Params)=>{
  this.employeeid = param['id'];
})
this.api.fetchdata(this.employeeid).subscribe((employee:Employees)=>{
  this.employeedata = employee;
  this.editEmployee.patchValue(this.employeedata);
  console.log(this.employeedata);
})
}
updateEmployee(): void{
  this.formsubmitted = true;
  if(this.editEmployee.valid){
    console.log(this.editEmployee.value);
  this.api.updateemployee(this.editEmployee.value,this.employeeid).subscribe({next:(res:Employees)=>{
    this.router.navigate(['/employee']);
  },
  error: (err)=>{
    console.error("Updated failed", err);
  }
  })
 }
 else{
  console.log("Invalid form");
 }
}
}
