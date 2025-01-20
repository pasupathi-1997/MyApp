import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehiclealertComponent } from '../vehiclealert.component';

@Component({
  selector: 'app-maintenalert',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,VehiclealertComponent],
  templateUrl: './maintenalert.component.html',
  styleUrl: './maintenalert.component.scss'
})
export class MaintenalertComponent {

}
