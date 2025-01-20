import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../display/display.component';
import { Workshop } from '../../../model/workshop';
import { WorkshopService } from '../../../service/workshop.service';

@Component({
  selector: 'app-workshopaccount',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent],
  templateUrl: './workshopaccount.component.html',
  styleUrl: './workshopaccount.component.scss'
})
export class WorkshopaccountComponent implements OnInit{
  work : Workshop[]=[];
  constructor(private api:WorkshopService){}
  ngOnInit(): void {
    this.getworkshop();
  }
getworkshop():void{
this.api.getworkshop().subscribe({next:(res)=>{
  this.work = res;
  console.log(res.length);
},
error:(err)=>{
  console.log("Get the workshop",err);
}
})
}
}
