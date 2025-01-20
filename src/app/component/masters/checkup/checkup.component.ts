import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkup',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './checkup.component.html',
  styleUrl: './checkup.component.scss'
})
export class CheckupComponent {

}
