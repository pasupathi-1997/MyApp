import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partapproval',
  standalone: true,
  imports: [DisplayComponent,RouterLink],
  templateUrl: './partapproval.component.html',
  styleUrl: './partapproval.component.scss'
})
export class PartapprovalComponent {

}
