import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-viewmanager',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,DisplayComponent],
  templateUrl: './viewmanager.component.html',
  styleUrl: './viewmanager.component.scss'
})
export class ViewmanagerComponent {

}
