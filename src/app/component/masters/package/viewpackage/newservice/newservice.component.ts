import { Component } from '@angular/core';
import { DisplayComponent } from '../../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newservice',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './newservice.component.html',
  styleUrl: './newservice.component.scss'
})
export class NewserviceComponent {

}
