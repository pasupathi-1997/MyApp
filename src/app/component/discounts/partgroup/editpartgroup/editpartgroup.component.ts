import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editpartgroup',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './editpartgroup.component.html',
  styleUrl: './editpartgroup.component.scss'
})
export class EditpartgroupComponent {
partno='VP';
}
