import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editpackage',
  standalone: true,
  imports: [DisplayComponent,CommonModule,RouterLink],
  templateUrl: './editpackage.component.html',
  styleUrl: './editpackage.component.scss'
})
export class EditpackageComponent {

}
