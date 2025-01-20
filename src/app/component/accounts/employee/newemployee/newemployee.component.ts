import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../../../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-newemployee',
  standalone: true,
  imports: [DisplayComponent,CommonModule,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './newemployee.component.html',
  styleUrl: './newemployee.component.scss'
})
export class NewemployeeComponent implements OnInit{
 employeeForm:FormGroup|any;
 formsubmitted:boolean=false;
//  private apiUrl= environment.Url;
 constructor(private formbuilder:FormBuilder, private api:EmployeeService, private router:Router, private http:HttpClient){}
 ngOnInit(): void {
  this.employeeForm=this.formbuilder.group({
    // empId:new FormControl(''),
    empName:new FormControl(''),
    empEmailId:new FormControl(''),
    empDesignation:new FormControl(''),
    empContactNo:new FormControl(''),
    empCode:new FormControl(''),
    role:new FormControl(''),
    // empAddress:new FormControl(''),
    // empCity:new FormControl(''),
    // empState:new FormControl(''),
    // empPincode:new FormControl(''),
    username:new FormControl(''),
    password:new FormControl('')
  })
  }
  onSubmit(): void{
    console.log(this.employeeForm.value);
    this.formsubmitted=true;
    if(this.employeeForm.valid){
      const employeedata = this.employeeForm.value;
      // this.http.post(this.apiUrl+'EmployeeApp/CreateNewEmployee',employeedata).subscribe((res)=>{
      this.api.addemployee(employeedata).subscribe((res)=>{
      this.employeeForm.reset();
      this.router.navigate(["/employee"]);
      })
    }
    else{
          console.log("Form is invalid");
        }
  }
// onSubmit(employeeForm:NgForm) : void{
//   console.log(this.employeeForm.value);
//   if(this.employeeForm.valid){
//     this.api.addemployee(employeeForm.value).subscribe((res)=>{
//       this.employeeForm.reset();
//       this.router.navigate(["/employee"]);
//       // console.log(this.employeeForm);
//     })
//   }
//   else{
//     console.log("Form is invalid");
//   }
// }
// onSubmit():void{
// console.log(this.employeeForm.value);
// const add = this.employeeForm.value;
// this.http.post(this.baseUrl+'/posts',add).subscribe((res:any)=>{
// this.employeeForm.reset();
// })
// }
}
