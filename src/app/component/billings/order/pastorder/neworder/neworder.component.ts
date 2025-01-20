import { Component } from '@angular/core';
import { DisplayComponent } from '../../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neworder',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './neworder.component.html',
  styleUrl: './neworder.component.scss'
})
export class NeworderComponent {

}
