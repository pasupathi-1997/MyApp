import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edittyremodal',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './edittyremodal.component.html',
  styleUrl: './edittyremodal.component.scss'
})
export class EdittyremodalComponent {
name='10.00 R 20 x Multi D';
}
