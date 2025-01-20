import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partdiscount',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './partdiscount.component.html',
  styleUrl: './partdiscount.component.scss'
})
export class PartdiscountComponent {

}
