import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { TechnicianService } from '../../../../service/technician.service';

@Component({
  selector: 'app-addtechnician',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent,ReactiveFormsModule],
  templateUrl: './addtechnician.component.html',
  styleUrl: './addtechnician.component.scss'
})
export class AddtechnicianComponent implements OnInit{
  techForm:FormGroup|any;
  formSubmitted:boolean=false;
  constructor(private techapi:TechnicianService, private router:Router, private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.techForm = this.formbuilder.group({
      workshop:new FormControl(''),
      ecode:new FormControl(''),
      name:new FormControl(''),
      grade:new FormControl(''),
      skill:new FormControl('')
    })
  }
onSubmit(){
  console.log(this.techForm.value);
  this.formSubmitted=true;
  if(this.techForm.valid){
    const addtech = this.techForm.value;
    this.techapi.addtechnician(addtech).subscribe((res:any)=>{
      this.techForm.reset();
      this.router.navigate(['/technician']);
    })
  }
  else{
    console.log("Form is invalid");
  }
}
}
