import { Component } from '@angular/core';
import { DisplayComponent } from '../../../../display/display.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addbill',
  standalone: true,
  imports: [DisplayComponent,RouterLink],
  templateUrl: './addbill.component.html',
  styleUrl: './addbill.component.scss'
})
export class AddbillComponent {

}
