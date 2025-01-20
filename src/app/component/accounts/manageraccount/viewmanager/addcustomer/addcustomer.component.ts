import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [RouterLink,DisplayComponent,CommonModule,FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.scss'
})
export class AddcustomerComponent {

}
