import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newvendor',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,RouterOutlet],
  templateUrl: './newvendor.component.html',
  styleUrl: './newvendor.component.scss'
})
export class NewvendorComponent {

}
