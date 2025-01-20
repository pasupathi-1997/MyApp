import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportfuellog',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './reportfuellog.component.html',
  styleUrl: './reportfuellog.component.scss'
})
export class ReportfuellogComponent {

}
