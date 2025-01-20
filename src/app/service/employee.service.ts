import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employees } from '../model/employees';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private apiUrl = environment.Url;
  constructor(private http:HttpClient) {
    // console.log(environment.apiUrl);
   }
  // addemployee(employee:Employee){
  //   return this.http.post<Employee>(this.apiUrl+'EmployeeApp/CreateNewEmployee',employee);
  //   //   ,{
  //   //   headers:{
  //   //     'Content-Type':'application/json'
  //   //   }
  //   // });
  // }
  // getemployee(){
  //   return this.http.get<Employee[]>(this.apiUrl+'EmployeeApp/GetAllEmployee');
  // }
  // fetchdata(id:number){
  //   return this.http.get<Employee>(this.apiUrl+'EmployeeApp/GetAllEmployee'+id);
  // }
  // updateemployee(id:number,employee:Employee){
  //   return this.http.put<Employee>(this.apiUrl+'EmployeeApp/UpdateEmployee'+id,employee);
  // }
  // deleteemployee(id:number){
  //   return this.http.delete<Employee>(this.apiUrl+'EmployeeApp/DeleteEmployee'+id);
  // }

  addemployee(employee:Employees){
    return this.http.post<Employees>("http://localhost:3000/employee/",employee);
  }
  getemployee(){
    return this.http.get<Employees[]>("http://localhost:3000/employee/");
  }
  fetchdata(id:number){
    return this.http.get<Employees>("http://localhost:3000/employee/"+id);
  }
  updateemployee(employee:Employees,id:number){
    return this.http.put<Employees>("http://localhost:3000/employee/"+id,employee)
  }
  deleteemployee(id:number){
    return this.http.delete<Employees>("http://localhost:3000/employee/"+id);
  }
}
