import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editlogreport',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './editlogreport.component.html',
  styleUrl: './editlogreport.component.scss'
})
export class EditlogreportComponent {

}
