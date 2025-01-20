import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../model/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }

  addstore(store:Store){
    return this.http.post<Store>("http://localhost:3000/store/",store);
  }
  getstore(){
    return this.http.get<Store[]>("http://localhost:3000/store/");
  }
  fetchdata(id:number){
    return this.http.get<Store>("http://localhost:3000/store/"+id);
  }
  updatestore(store:Store,id:number){
    return this.http.put<Store>("http://localhost:3000/store/"+id,store)
  }
  deletestore(id:number){
    return this.http.delete<Store>("http://localhost:3000/store/"+id);
  }
}
