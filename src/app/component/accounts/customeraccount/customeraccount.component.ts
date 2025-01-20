import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../display/display.component';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-customeraccount',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,DisplayComponent],
  templateUrl: './customeraccount.component.html',
  styleUrl: './customeraccount.component.scss'
})
export class CustomeraccountComponent implements OnInit {
  customer: Customer[]=[];
  constructor(private router:Router, private cusapi:CustomerService){}
  ngOnInit(): void {
    this.getcustomer();
  }
  getcustomer(): void {
    this.cusapi.getcustomer().subscribe({next:(res)=> {
       this.customer = res;
       console.log(res.length);
     },
     error: (err) =>{
       console.error('get the student', err);
     }
   });
 }
  // this.router.navigate(['/customer/newcustomer']);
}
