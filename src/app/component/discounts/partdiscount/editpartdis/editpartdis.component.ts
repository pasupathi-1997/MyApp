import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editpartdis',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './editpartdis.component.html',
  styleUrl: './editpartdis.component.scss'
})
export class EditpartdisComponent {

}
