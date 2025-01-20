import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../../../service/account.service';
import { Accounts } from '../../../../model/accounts';

@Component({
  selector: 'app-editaccount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './editaccount.component.html',
  styleUrl: './editaccount.component.scss'
})
export class EditaccountComponent implements OnInit{
editaccount:FormGroup|any;
public accountid!:any;
public accountdata!:Accounts;
formsubmitted:boolean=false;
constructor(private formbuilder:FormBuilder, private api:AccountService, private router:Router, private activaterouter:ActivatedRoute){
  this.editaccount=this.formbuilder.group({
    user:new FormControl(''),
    email:new FormControl(''),
    memberId:new FormControl(''),
    date:new FormControl(''),
  })
}
ngOnInit(): void {
  this.activaterouter.params.subscribe((param:Params)=>{
    this.accountid = param['id'];
  })
  this.api.fetchdata(this.accountid).subscribe((account:Accounts)=>{
    this.accountdata = account;
    this.editaccount.patchValue(this.accountdata);
    console.log(this.accountdata);
  })
}
updateAccount():void{
  this.formsubmitted = true;
  if(this.editaccount.valid){
    this.api.updateaccount(this.editaccount.value, this.accountid).subscribe({next:(res:Accounts)=>{
    this.router.navigate(['/account']);
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
