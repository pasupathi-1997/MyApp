import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autogen',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './autogen.component.html',
  styleUrl: './autogen.component.scss'
})
export class AutogenComponent {

}
