import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { TechnicianService } from '../../../../service/technician.service';
import { Technician } from '../../../../model/technician';

@Component({
  selector: 'app-edittechnician',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent,ReactiveFormsModule],
  templateUrl: './edittechnician.component.html',
  styleUrl: './edittechnician.component.scss'
})
export class EdittechnicianComponent implements OnInit{
  editForm:FormGroup|any;
  public techid!:any;
  public techdata!:Technician;
  formsubmitted:boolean=false;
  constructor(private formbuilder:FormBuilder, private api:TechnicianService, private router:Router, private activedrouter:ActivatedRoute){
    this.editForm=this.formbuilder.group({
      workshop:new FormControl(''),
      ecode:new FormControl(''),
      name:new FormControl(''),
      grade:new FormControl(''),
      skill:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activedrouter.params.subscribe((param:Params)=>{
      this.techid = param['id'];
    })
    this.api.fetchdata(this.techid).subscribe((tech:Technician)=>{
      this.techdata = tech;
      this.editForm.patchValue(this.techdata);
      console.log(this.techdata);
    })
  }
 updatetech():void{
  this.formsubmitted=true;
  if(this.editForm.valid){
    this.api.updatetechnician(this.editForm.value,this.techid).subscribe({next:(res:Technician)=>{
      this.router.navigate(['/technician']);
    },
    error: (err)=>{
      console.error("Updated failed", err);
    }
  })
  }
  else{
    console.log("Invalid Form");
  }
 }

}
