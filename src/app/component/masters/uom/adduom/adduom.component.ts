import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adduom',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './adduom.component.html',
  styleUrl: './adduom.component.scss'
})
export class AdduomComponent {

}
