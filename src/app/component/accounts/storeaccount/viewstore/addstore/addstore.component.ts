import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../../display/display.component';

@Component({
  selector: 'app-addstore',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent],
  templateUrl: './addstore.component.html',
  styleUrl: './addstore.component.scss'
})
export class AddstoreComponent {

}
