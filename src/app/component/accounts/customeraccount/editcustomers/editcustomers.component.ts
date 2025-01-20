import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../../../service/customer.service';
import { Customer } from '../../../../model/customer';

@Component({
  selector: 'app-editcustomers',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './editcustomers.component.html',
  styleUrl: './editcustomers.component.scss'
})
export class EditcustomersComponent implements OnInit{
editCustomer:FormGroup|any;
formSubmitted:boolean=false;
public customerid!:any;
public customerdata!:any;
constructor(private formbuilder:FormBuilder, private cusapi:CustomerService, private router:Router, private activatedroute:ActivatedRoute){
  this.editCustomer = this.formbuilder.group({
    name:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    customerId:new FormControl(''),
    date:new FormControl('')
  })
}
ngOnInit(): void {
this.activatedroute.params.subscribe((param:Params)=>{
  this.customerid=param['id'];
})
this.cusapi.fetchdata(this.customerid).subscribe((customer:Customer)=>{
  this.customerdata = customer;
  this.editCustomer.patchValue(this.customerdata);
  console.log(this.customerdata);
})
}
onSubmit():void{
  this.formSubmitted = true;
  if(this.editCustomer.valid){
    this.cusapi.updatecustomer(this.editCustomer.value, this.customerid).subscribe({next:(res:Customer)=>{
      this.router.navigate(['/customer']);
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
