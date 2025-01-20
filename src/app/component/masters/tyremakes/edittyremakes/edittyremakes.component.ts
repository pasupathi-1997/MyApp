import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edittyremakes',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './edittyremakes.component.html',
  styleUrl: './edittyremakes.component.scss'
})
export class EdittyremakesComponent {

}
