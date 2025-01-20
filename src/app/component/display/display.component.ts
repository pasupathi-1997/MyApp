import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DisplayService } from '../../service/display.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {
  constructor(private api:DisplayService){}
ngOnInit(): void {

}
logout(){
this.api.signout();
}
}
