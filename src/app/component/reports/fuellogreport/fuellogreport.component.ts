import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fuellogreport',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './fuellogreport.component.html',
  styleUrl: './fuellogreport.component.scss'
})
export class FuellogreportComponent {

}
