import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../../../service/account.service';

@Component({
  selector: 'app-newaccount',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent,ReactiveFormsModule],
  templateUrl: './newaccount.component.html',
  styleUrl: './newaccount.component.scss'
})
export class NewaccountComponent implements OnInit{
  accountForm:FormGroup|any;
  formSubmitted:boolean = false;
  constructor(private formbuilder:FormBuilder, private router:Router, private http:HttpClient, private accapi:AccountService){}

  ngOnInit(): void {
    this.accountForm=this.formbuilder.group({
      // empId:new FormControl(''),
      user:new FormControl(''),
      email:new FormControl(''),
      memberId:new FormControl(''),
      date:new FormControl(''),
    })
  }
onSubmit(){
  console.log(this.accountForm.value);
  this.formSubmitted =  true;
  if(this.accountForm.valid){
    const addaccount = this.accountForm.value;
    this.accapi.addaccount(addaccount).subscribe((res:any)=>{
      this.accountForm.reset();
      this.router.navigate(['/account']);
    })
  }
  else{
    console.log("Form is invalid");
  }
}
}
