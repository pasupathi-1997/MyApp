import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.scss'
})
export class DiscountComponent {

}
