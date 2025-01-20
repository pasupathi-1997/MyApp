import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehiclealertComponent } from '../vehiclealert.component';

@Component({
  selector: 'app-attention',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,VehiclealertComponent],
  templateUrl: './attention.component.html',
  styleUrl: './attention.component.scss'
})
export class AttentionComponent {

}
