import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent {

}
