import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-storeadd',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './storeadd.component.html',
  styleUrl: './storeadd.component.scss'
})
export class StoreaddComponent {

}
