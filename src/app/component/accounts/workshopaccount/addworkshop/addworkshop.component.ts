import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-addworkshop',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent],
  templateUrl: './addworkshop.component.html',
  styleUrl: './addworkshop.component.scss'
})
export class AddworkshopComponent {

}
