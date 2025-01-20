import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addtyremakes',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './addtyremakes.component.html',
  styleUrl: './addtyremakes.component.scss'
})
export class AddtyremakesComponent {

}
