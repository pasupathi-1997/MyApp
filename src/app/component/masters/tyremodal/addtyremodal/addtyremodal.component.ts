import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addtyremodal',
  standalone: true,
  imports: [RouterLink,DisplayComponent,CommonModule],
  templateUrl: './addtyremodal.component.html',
  styleUrl: './addtyremodal.component.scss'
})
export class AddtyremodalComponent {

}
