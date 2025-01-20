import { Component } from '@angular/core';
import { DisplayComponent } from '../../../../display/display.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addinvoice',
  standalone: true,
  imports: [DisplayComponent,RouterLink],
  templateUrl: './addinvoice.component.html',
  styleUrl: './addinvoice.component.scss'
})
export class AddinvoiceComponent {

}
