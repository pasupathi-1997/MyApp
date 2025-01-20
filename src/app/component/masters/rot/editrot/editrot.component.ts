import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editrot',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './editrot.component.html',
  styleUrl: './editrot.component.scss'
})
export class EditrotComponent {
  title='AC100A';
  code='R & R AC Engine Assy';
  amount='640';
}
