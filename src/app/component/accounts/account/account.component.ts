import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DisplayComponent } from '../../display/display.component';
import { AccountService } from '../../../service/account.service';
import { Accounts } from '../../../model/accounts';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,RouterLink,DisplayComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  account: Accounts[]=[];
  constructor(private accapi:AccountService){}
  ngOnInit(): void {
    this.getaccount();
  }
  getaccount(): void {
    this.accapi.getaccount().subscribe({next:(res)=> {
       this.account = res;
       console.log(res.length);
     },
     error: (err) =>{
       console.error('get the student', err);
     }
   });
 }
}
