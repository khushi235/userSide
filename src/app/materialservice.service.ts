import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialserviceService {

  url:string='http://localhost:3000/materialstudent/';
  constructor(private _http:HttpClient) { }
  getAllmaterial(){
    return this._http.get(this.url);
  }
}
