import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../model/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  addmanager(man:Manager){
    return this.http.post<Manager>("http://localhost:3000/manager/",man);
  }
  getmanager(){
    return this.http.get<Manager[]>("http://localhost:3000/manager/");
  }
  fetchdata(id:number){
    return this.http.get<Manager>("http://localhost:3000/manager/"+id);
  }
  updatemanager(man:Manager,id:number){
    return this.http.put<Manager>("http://localhost:3000/manager/"+id,man);
  }
  deletemanager(id:number){
    return this.http.delete<Manager>("http://localhost:3000/manager/"+id)
  }
}
