import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-viewstore',
  standalone: true,
  imports: [DisplayComponent,RouterOutlet,RouterLink,CommonModule],
  templateUrl: './viewstore.component.html',
  styleUrl: './viewstore.component.scss'
})
export class ViewstoreComponent {

}
