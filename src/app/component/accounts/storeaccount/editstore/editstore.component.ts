import { Component } from '@angular/core';
import { DisplayComponent } from "../../../display/display.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editstore',
  standalone: true,
  imports: [DisplayComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './editstore.component.html',
  styleUrl: './editstore.component.scss'
})
export class EditstoreComponent {
email='SFLManager@gmail.com';
password='98765';
firstname='SFL';
lastname='store';
address='madurari';
zipcode='625002';
phone='8680521642';
}
