import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pastorder',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './pastorder.component.html',
  styleUrl: './pastorder.component.scss'
})
export class PastorderComponent {

}
