import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adddiscount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './adddiscount.component.html',
  styleUrl: './adddiscount.component.scss'
})
export class AdddiscountComponent {

}
