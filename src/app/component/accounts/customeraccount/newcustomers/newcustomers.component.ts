import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../../../service/customer.service';

@Component({
  selector: 'app-newcustomers',
  standalone: true,
  imports: [RouterLink,DisplayComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './newcustomers.component.html',
  styleUrl: './newcustomers.component.scss'
})
export class NewcustomersComponent implements OnInit{
  customerForm:FormGroup|any;
  formSubmitted:boolean =false;
  constructor(private formbuilder:FormBuilder, private router:Router, private cusapi: CustomerService){}
  ngOnInit(): void {
    this.customerForm=this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      customerId:new FormControl(''),
      date:new FormControl(''),
    })
  }
  onSubmit(){
    console.log(this.customerForm.value);
    this.formSubmitted = true;
    if(this.customerForm.valid){
      const addaccount = this.customerForm.value;
      this.cusapi.addcustomer(addaccount).subscribe((res:any)=>{
        this.customerForm.reset();
        this.router.navigate(['/customer']);
      })
    }
    else{
      console.log("Form is invalid");
    }
  }
}
