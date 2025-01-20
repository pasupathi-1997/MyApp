import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportadd',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './reportadd.component.html',
  styleUrl: './reportadd.component.scss'
})
export class ReportaddComponent {

}
