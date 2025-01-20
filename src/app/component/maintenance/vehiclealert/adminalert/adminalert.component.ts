import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehiclealertComponent } from '../vehiclealert.component';

@Component({
  selector: 'app-adminalert',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,VehiclealertComponent],
  templateUrl: './adminalert.component.html',
  styleUrl: './adminalert.component.scss'
})
export class AdminalertComponent {

}
