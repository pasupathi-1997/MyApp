import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-editmanager',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule,DisplayComponent],
  templateUrl: './editmanager.component.html',
  styleUrl: './editmanager.component.scss'
})
export class EditmanagerComponent {
  email ='TVSSFL@gmail.com';
  password ='12345';
  firstname ='SFL';
  lastname ='Manager';
  address ='4,Annanagar, madurai';
  zipcode ='625003';
  phone ='9789251775';

}
