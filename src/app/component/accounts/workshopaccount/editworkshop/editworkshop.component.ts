import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DisplayComponent } from '../../../display/display.component';

@Component({
  selector: 'app-editworkshop',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,DisplayComponent],
  templateUrl: './editworkshop.component.html',
  styleUrl: './editworkshop.component.scss'
})
export class EditworkshopComponent {
  email ='kumar12@gmail.com';
  password ='12345';
  firstname ='TVS Code';
  lastname ='DABASPET';
  address ='4,Annanagar, madurai';
  zipcode ='625003';
  phone ='9789251775';
}
