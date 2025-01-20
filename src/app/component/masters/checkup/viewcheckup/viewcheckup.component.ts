import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcheckup',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './viewcheckup.component.html',
  styleUrl: './viewcheckup.component.scss'
})
export class ViewcheckupComponent {

}
