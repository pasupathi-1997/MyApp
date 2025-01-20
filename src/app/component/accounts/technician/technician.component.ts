import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Technician } from '../../../model/technician';
import { TechnicianService } from '../../../service/technician.service';

@Component({
  selector: 'app-technician',
  standalone: true,
  imports: [RouterLink,CommonModule,DisplayComponent,FormsModule],
  templateUrl: './technician.component.html',
  styleUrl: './technician.component.scss'
})
export class TechnicianComponent implements OnInit{
  tech: Technician[]=[];
  constructor(private techapi:TechnicianService){}
  ngOnInit(): void {
    this.gettechnician();
  }
  gettechnician():void{
    this.techapi.gettechnician().subscribe({next:(res)=>{
      this.tech = res;
      console.log(res.length);
    },
  error: (err)=>{
    console.log("Get the technician", err);
  }
})
  }
}
