import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partgroup',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule],
  templateUrl: './partgroup.component.html',
  styleUrl: './partgroup.component.scss'
})
export class PartgroupComponent {

}
