import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from '../../../display/display.component';
import { Router, RouterLink } from '@angular/router';
import { WorkshopService } from '../../../../service/workshop.service';

@Component({
  selector: 'app-addworkshops',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,DisplayComponent,RouterLink],
  templateUrl: './addworkshops.component.html',
  styleUrl: './addworkshops.component.scss'
})
export class AddworkshopsComponent implements OnInit{
  workForm:FormGroup|any;
  formsubmitted:boolean=false;
  constructor(private api:WorkshopService, private router:Router, private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.workForm=this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      customer:new FormControl(''),
      date:new FormControl(''),
      login:new FormControl('')
    })
  }
onSubmit():void{
  console.log(this.workForm.value);
  this.formsubmitted=true;
  if(this.workForm.valid){
    const addwork = this.workForm.value;
    this.api.addworkshop(addwork).subscribe({next:(res:any)=>{
      this.workForm.reset();
      this.router.navigate(['/workshop']);
    }
  })
  }
  else{
    console.log("Form is invalid");
  }
}
}
