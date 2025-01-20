import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehiclealertComponent } from '../vehiclealert.component';

@Component({
  selector: 'app-tyrealert',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,VehiclealertComponent],
  templateUrl: './tyrealert.component.html',
  styleUrl: './tyrealert.component.scss'
})
export class TyrealertComponent {

}
