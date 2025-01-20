import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from '../../../../service/manager.service';

@Component({
  selector: 'app-newmanager',
  standalone: true,
  imports: [RouterLink,CommonModule,DisplayComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './newmanager.component.html',
  styleUrl: './newmanager.component.scss'
})
export class NewmanagerComponent implements OnInit{
managerForm:FormGroup|any;
formSubmitted:boolean=false;
constructor(private formbuilder:FormBuilder, private router:Router, private http:HttpClient, private managerapi:ManagerService){}

ngOnInit(): void {
this.managerForm=this.formbuilder.group({
  name:new FormControl(''),
  username:new FormControl(''),
  email:new FormControl(''),
  memberId:new FormControl(''),
  date:new FormControl(''),
  login:new FormControl('')
})
console.log(this.managerForm);
}
onSubmit(){
  console.log(this.managerForm.value);
  this.formSubmitted = true;
  if(this.managerForm.valid){
    const addmanager = this.managerForm.value;
    this.managerapi.addmanager(addmanager).subscribe((res:any)=>{
      this.managerForm.reset();
      this.router.navigate(["/manager"]);
    })
  }
  else{
    console.log("Form is invalid");
  }
}
}
