import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tyremodal',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './tyremodal.component.html',
  styleUrl: './tyremodal.component.scss'
})
export class TyremodalComponent {

}
