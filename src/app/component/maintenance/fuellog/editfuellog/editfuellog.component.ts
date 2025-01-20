import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editfuellog',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './editfuellog.component.html',
  styleUrl: './editfuellog.component.scss'
})
export class EditfuellogComponent {

}
