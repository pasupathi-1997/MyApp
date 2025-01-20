import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addpurchaseorder',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './addpurchaseorder.component.html',
  styleUrl: './addpurchaseorder.component.scss'
})
export class AddpurchaseorderComponent {

}
