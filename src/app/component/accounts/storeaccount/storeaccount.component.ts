import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from "../../display/display.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '../../../model/store';
import { StoreService } from '../../../service/store.service';

@Component({
  selector: 'app-storeaccount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './storeaccount.component.html',
  styleUrl: './storeaccount.component.scss'
})
export class StoreaccountComponent implements OnInit{
  store: Store[]=[];
  constructor(private storeapi:StoreService){}
  ngOnInit(): void {
    this.getstore();
  }
getstore():void{
this.storeapi.getstore().subscribe({next:(res)=>{
  this.store=res;
  console.log(res.length);
},
error: (err) =>{
  console.error('get the store', err);
}})
}
}
