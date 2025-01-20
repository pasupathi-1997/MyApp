import { Component } from '@angular/core';
import { DisplayComponent } from '../../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editdiscount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './editdiscount.component.html',
  styleUrl: './editdiscount.component.scss'
})
export class EditdiscountComponent {

}
