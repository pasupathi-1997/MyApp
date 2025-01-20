import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from "../../display/display.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Manager } from '../../../model/manager';
import { ManagerService } from '../../../service/manager.service';

@Component({
  selector: 'app-manageraccount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './manageraccount.component.html',
  styleUrl: './manageraccount.component.scss'
})
export class ManageraccountComponent implements OnInit {
  manager : Manager[]=[];
  constructor(private managerapi:ManagerService){}

  ngOnInit(): void {
    this.getmanager();
  }

  getmanager(): void {
    this.managerapi.getmanager().subscribe({next:(res)=> {
       this.manager = res;
       console.log(res.length);
     },
     error: (err) =>{
       console.error('get the manager', err);
     }
   });
 }
}
