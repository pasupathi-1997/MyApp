import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewpackage',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './viewpackage.component.html',
  styleUrl: './viewpackage.component.scss'
})
export class ViewpackageComponent {

}
