import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  addtransaction(trans:Transaction){
    return this.http.post<Transaction>("http://localhost:3000/transaction/",trans);
  }
  gettransaction(){
    return this.http.get<Transaction[]>("http://localhost:3000/transaction/");
  }
  fetchdata(id:number){
    return this.http.get<Transaction>("http://localhost:3000/transaction/"+id);
  }
  updatetransaction(trans:Transaction, id:number){
    return this.http.put<Transaction>("http://localhost:3000/transaction/"+id,trans);
  }
  deletetransaction(id:number){
    return this.http.delete<Transaction>("http://localhost:3000/transaction/"+id);
  }
}
