import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addpartdis',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './addpartdis.component.html',
  styleUrl: './addpartdis.component.scss'
})
export class AddpartdisComponent {

}
