import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addtransaction',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './addtransaction.component.html',
  styleUrl: './addtransaction.component.scss'
})
export class AddtransactionComponent {

}
