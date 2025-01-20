import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editdis',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './editdis.component.html',
  styleUrl: './editdis.component.scss'
})
export class EditdisComponent {

}
