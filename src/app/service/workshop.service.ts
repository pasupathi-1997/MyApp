import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workshop } from '../model/workshop';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http:HttpClient) { }

  addworkshop(work:Workshop){
    return this.http.post<Workshop>("http://localhost:3000/workshop/",work);
  }
  getworkshop(){
    return this.http.get<Workshop[]>("http://localhost:3000/workshop/");
  }
  fetchdata(id:number){
    return this.http.get<Workshop>("http://localhost:3000/workshop/"+id);
  }
  updateworkshop(work:Workshop, id:number){
    return this.http.put<Workshop>("http://localhost:3000/workshop/"+id,work);
  }
  deleteworkshop(id:number){
    return this.http.delete<Workshop>("http://localhost:3000/workshop/"+id);
  }
}
