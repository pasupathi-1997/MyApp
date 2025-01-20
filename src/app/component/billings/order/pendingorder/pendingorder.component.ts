import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-pendingorder',
  standalone: true,
  imports: [RouterLink,CommonModule,DisplayComponent],
  templateUrl: './pendingorder.component.html',
  styleUrl: './pendingorder.component.scss'
})
export class PendingorderComponent {

}
