import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edittransaction',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './edittransaction.component.html',
  styleUrl: './edittransaction.component.scss'
})
export class EdittransactionComponent {
vehicleno='TN59BH0345';
jcno='LC001';
km='120';
time='Open:25-09-2024 08:30AM Close:07:45PM';
status='Completed';
}
