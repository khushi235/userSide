import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './companydisplay/company';

@Injectable({
  providedIn: 'root'
})
export class CompanydataService {
  private url :string=environment.url +'company/';
  constructor(private _http:HttpClient) { }

  getAllcompany(){
    return this._http.get(this.url);
  }
  addCompany(item) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: head });
}
deleteCompany(id: number) {
  const x = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url + id, {headers: x});
}
getCompanyById(id: number) {
  return this._http.get(this.url + id);

 }
 updateCompany(item: Company) {
  const body = JSON.stringify(item);
  const x = new HttpHeaders().set(environment.header,environment.value);
  return this._http.put(this.url + item.c_id, body, {headers: x});

  }
}
