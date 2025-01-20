import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rot',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './rot.component.html',
  styleUrl: './rot.component.scss'
})
export class RotComponent {

}
