import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '../../../../model/store';
import { StoreService } from '../../../../service/store.service';

@Component({
  selector: 'app-editstores',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './editstores.component.html',
  styleUrl: './editstores.component.scss'
})
export class EditstoresComponent implements OnInit{
  editstore:FormGroup|any;
  public storeid!:any;
  public storedata!:Store;
  formsubmitted:boolean=false;
  constructor(private formbuilder:FormBuilder, private api:StoreService, private router:Router, private activerouter:ActivatedRoute){
    this.editstore=this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      memberId:new FormControl(''),
      date:new FormControl(''),
      login:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activerouter.params.subscribe((param:Params)=>{
      this.storeid = param['id'];
    })
    this.api.fetchdata(this.storeid).subscribe((store:Store)=>{
      this.storedata = store;
      this.editstore.patchValue(this.storedata);
      console.log(this.storedata);
    })
  }
 updateStore():void{
  this.formsubmitted=true;
  if(this.editstore.valid){
    this.api.updatestore(this.editstore.value, this.storeid).subscribe({next:(res:Store)=>{
      this.router.navigate(['/store']);
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
