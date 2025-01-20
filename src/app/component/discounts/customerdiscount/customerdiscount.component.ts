import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerdiscount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './customerdiscount.component.html',
  styleUrl: './customerdiscount.component.scss'
})
export class CustomerdiscountComponent {

}
