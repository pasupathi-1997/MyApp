import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technician } from '../model/technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http:HttpClient) { }

  addtechnician(tech:Technician){
    return this.http.post<Technician>("http://localhost:3000/technician/",tech);
  }
  gettechnician(){
    return this.http.get<Technician[]>("http://localhost:3000/technician/");
  }
  fetchdata(id:number){
    return this.http.get<Technician>("http://localhost:3000/technician/"+id);
  }
  updatetechnician(tech:Technician,id:number){
    return this.http.put<Technician>("http://localhost:3000/technician/"+id,tech);
  }
  deletetechnician(id:number){
    return this.http.delete<Technician>("http://localhost:3000/technician/"+id);
  }
}
