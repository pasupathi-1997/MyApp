import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomeraccountComponent } from '../customeraccount.component';
import { DisplayComponent } from '../../../display/display.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  standalone: true,
  imports: [RouterLink,CommonModule,DisplayComponent,FormsModule],
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.scss'
})
export class EditcustomerComponent {
  // edits : Customeredit[]=[
  //   {id:1, email:'kumar12@gmail.com', password:'12345',firstname:'TVS Code', lastname:'DABASPET', address:'4,Annanagar, madurai', zipcode:'625003', phone:'9789251775'},
  // ];
  // selectedItem:any =[];
  // displaydata: {edits:Customeredit}[]=[];

  email ='kumar12@gmail.com';
  password ='12345';
  firstname ='TVS Code';
  lastname ='DABASPET';
  address ='4,Annanagar, madurai';
  zipcode ='625003';
  phone ='9789251775';

}
