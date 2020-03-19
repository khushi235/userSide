import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventdataService {


  url:string='http://localhost:3000/eventstudent/';
  constructor(private _http:HttpClient) { }
  getAllevent(){
    return this._http.get(this.url);
  }
}
