import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { StoreService } from '../../../../service/store.service';

@Component({
  selector: 'app-addstores',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink,DisplayComponent],
  templateUrl: './addstores.component.html',
  styleUrl: './addstores.component.scss'
})
export class AddstoresComponent implements OnInit{
  storeForm:FormGroup|any;
  formSubmitted:boolean=false;
  constructor(private formbuilder:FormBuilder, private router:Router, private storeapi:StoreService){}
  ngOnInit(): void {
    this.storeForm=this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      memberId:new FormControl(''),
      date:new FormControl(''),
      login:new FormControl('')
    })
  }
onSubmit():void{
  console.log(this.storeForm.value);
  this.formSubmitted=true;
  if(this.storeForm.valid){
    const addstore = this.storeForm.value;
    this.storeapi.addstore(addstore).subscribe((res:any)=>{
      this.storeForm.reset();
      this.router.navigate(['/store']);
    })
  }
  else{
    console.log("Form is invalid");
  }
}
}
