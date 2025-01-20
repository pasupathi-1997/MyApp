import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Workshop } from '../../../../model/workshop';
import { WorkshopService } from '../../../../service/workshop.service';

@Component({
  selector: 'app-editworkshops',
  standalone: true,
  imports: [DisplayComponent,CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './editworkshops.component.html',
  styleUrl: './editworkshops.component.scss'
})
export class EditworkshopsComponent implements OnInit{
  editwork:FormGroup|any;
  workid!:any;
  workdata!:Workshop;
  formSubmitted:boolean=true;
  constructor(private api:WorkshopService, private router:Router, private formbuilder:FormBuilder, private activatedroute:ActivatedRoute){
    this.editwork = this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      customer:new FormControl(''),
      date:new FormControl(''),
      login:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param:Params)=>{
      this.workid = param['id'];
    })
    this.api.fetchdata(this.workid).subscribe((work:Workshop)=>{
      this.workdata = work;
      this.editwork.patchValue(this.workdata);
      console.log(this.workdata)
    })
  }
  onSubmit():void{
    this.formSubmitted = true;
    if(this.editwork.valid){
      this.api.updateworkshop(this.editwork.value, this.workid).subscribe({next:(res:Workshop)=>{
        this.router.navigate(['/workshop']);
      },
    error: (err)=>{
      console.error("Upload failed", err);
    }
    })
    }
    else{
      console.log("Invalid Form");
    }
  }
}
