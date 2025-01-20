import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Manager } from '../../../../model/manager';
import { ManagerService } from '../../../../service/manager.service';

@Component({
  selector: 'app-editmanagers',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './editmanagers.component.html',
  styleUrl: './editmanagers.component.scss'
})
export class EditmanagersComponent implements OnInit{
  editManager:FormGroup|any;
  public managerid!:any;
  public managerdata!:Manager;
  formSubmitted:boolean=false;
  constructor(private formbuilder:FormBuilder, private manapi:ManagerService, private router:Router, private activateroute:ActivatedRoute){
    this.editManager=this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      memberId:new FormControl(''),
      date:new FormControl(''),
      login:new FormControl('')
    })
  }

  ngOnInit(): void {
    this.activateroute.params.subscribe((param:Params)=>{
      this.managerid = param['id'];
    })
    this.manapi.fetchdata(this.managerid).subscribe((manager:Manager)=>{
      this.managerdata = manager;
      this.editManager.patchValue(this.managerdata);
      console.log(this.managerdata);
    })

  }
  updateManager():void{
    this.formSubmitted=true;
    if(this.editManager.valid){
      this.manapi.updatemanager(this.editManager.value, this.managerid).subscribe({next:(res:Manager)=>{
        this.router.navigate(['/manager']);
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
