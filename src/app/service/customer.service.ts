import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  addcustomer(customer:Customer){
    return this.http.post<Customer>("http://localhost:3000/customer/",customer);
  }
  getcustomer(){
    return this.http.get<Customer[]>("http://localhost:3000/customer/");
  }
  fetchdata(id:number){
    return this.http.get<Customer>("http://localhost:3000/customer/"+id);
  }
  updatecustomer(customer:Customer,id:number){
    return this.http.put<Customer>("http://localhost:3000/customer/"+id,customer);
  }
  deletecustomer(id:number){
    return this.http.delete<Customer>("http://localhost:3000/customer/"+id);
  }
}
