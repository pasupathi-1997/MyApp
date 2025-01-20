import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
// import { Account } from '../model/account';
import { Accounts } from '../model/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService{

  constructor(private http:HttpClient) { }
  addaccount(acc:Accounts){
    return this.http.post<Accounts>("http://localhost:3000/account/",acc);
  }
  getaccount(){
    return this.http.get<Accounts[]>("http://localhost:3000/account/");
  }
  fetchdata(id:number){
    return this.http.get<Accounts>("http://localhost:3000/account/"+id);
  }
  updateaccount(account:Accounts,id:number){
    return this.http.put<Accounts>("http://localhost:3000/account/"+id,account);
  }

}
