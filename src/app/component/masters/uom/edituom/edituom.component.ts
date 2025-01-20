import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edituom',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './edituom.component.html',
  styleUrl: './edituom.component.scss'
})
export class EdituomComponent {

}
