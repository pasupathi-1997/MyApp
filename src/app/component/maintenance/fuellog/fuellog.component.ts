import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fuellog',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './fuellog.component.html',
  styleUrl: './fuellog.component.scss'
})
export class FuellogComponent {

}
