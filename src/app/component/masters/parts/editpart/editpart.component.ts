import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editpart',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './editpart.component.html',
  styleUrl: './editpart.component.scss'
})
export class EditpartComponent {

}
