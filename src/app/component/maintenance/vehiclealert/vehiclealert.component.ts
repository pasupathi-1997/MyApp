import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiclealert',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './vehiclealert.component.html',
  styleUrl: './vehiclealert.component.scss'
})
export class VehiclealertComponent {

}
