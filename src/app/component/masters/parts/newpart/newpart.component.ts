import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newpart',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './newpart.component.html',
  styleUrl: './newpart.component.scss'
})
export class NewpartComponent {

}
