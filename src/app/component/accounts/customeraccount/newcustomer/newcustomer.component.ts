import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-newcustomer',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule,FormsModule,DisplayComponent],
  templateUrl: './newcustomer.component.html',
  styleUrl: './newcustomer.component.scss'
})
export class NewcustomerComponent {

}
