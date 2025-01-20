import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tyremakes',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './tyremakes.component.html',
  styleUrl: './tyremakes.component.scss'
})
export class TyremakesComponent {

}
