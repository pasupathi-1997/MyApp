import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uom',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './uom.component.html',
  styleUrl: './uom.component.scss'
})
export class UomComponent {

}
