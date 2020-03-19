import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticedataService {
  url:string='http://localhost:3000/noticestudent/';
  constructor(private _http:HttpClient) { }
  getAllnotice(){
    return this._http.get(this.url);
  }
}
