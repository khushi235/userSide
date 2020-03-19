import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  url:string='http://localhost:3000/student/'
    constructor(private _http: HttpClient) { }

    getAllstudent(){
      return this._http.get(this.url);
    }
    deleteStudent(id: string) {
      const x = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.delete(this.url + id, {headers: x});
    }
    addStudent(item) {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.post(this.url, body, { headers: head });

  }

  getstudentbyid(id: number) {
    const x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + id);

   }

   updatestudent(user_id,item) {
    return this._http.put(this.url + user_id,item);

    }
  }


