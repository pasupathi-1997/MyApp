import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehiclealertComponent } from '../vehiclealert.component';

@Component({
  selector: 'app-batteryalert',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,VehiclealertComponent],
  templateUrl: './batteryalert.component.html',
  styleUrl: './batteryalert.component.scss'
})
export class BatteryalertComponent {

}
