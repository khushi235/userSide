import { Component, OnInit } from '@angular/core';
import { CompanydataService } from '../companydata.service';
import { Company } from './company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companydisplay',
  templateUrl: './companydisplay.component.html',
  styleUrls: ['./companydisplay.component.css']
})
export class CompanydisplayComponent implements OnInit {

  constructor(public _companydata:CompanydataService,public _router:Router) { }

c_id:string[]=[];
   c_aboutcompany:string[]=[];
   c_address:string[]=[];
     c_contactno:number[]=[];
     c_emailid:string[]=[];
     c_name:string[]=[];
     c_websitelink:string[]=[];


  arr:Company[]=[];
  ngOnInit() {
    this._companydata.getAllcompany().subscribe(
      (data:Company[])=>{

        console.log(data);
        this.arr=data;
      }
    );
    }
    onViewmore(row)
    {
      this._router.navigate(['/companyviewmore',row.c_id]);
    }

}
