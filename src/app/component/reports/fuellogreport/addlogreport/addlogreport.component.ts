import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addlogreport',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './addlogreport.component.html',
  styleUrl: './addlogreport.component.scss'
})
export class AddlogreportComponent {

}
