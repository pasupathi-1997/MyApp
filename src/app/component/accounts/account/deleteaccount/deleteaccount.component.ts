import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-deleteaccount',
  standalone: true,
  imports: [DisplayComponent,CommonModule],
  templateUrl: './deleteaccount.component.html',
  styleUrl: './deleteaccount.component.scss'
})
export class DeleteaccountComponent {

}
