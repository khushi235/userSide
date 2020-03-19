import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanydataService } from 'src/app/companydata.service';
import { Company } from '../company';

@Component({
  selector: 'app-companyviewmore',
  templateUrl: './companyviewmore.component.html',
  styleUrls: ['./companyviewmore.component.css']
})
export class CompanyviewmoreComponent implements OnInit {
  c_id: number;
  c_name:string="";
  c_emailid:string="";
  c_contactno:number;
  c_websitelink:string="";
  c_address:string="";
  c_aboutcompany:string="";
    constructor(private _act_route: ActivatedRoute,public _companydata:CompanydataService,public _router:Router) { }

    ngOnInit()
     {
      this.c_id = this._act_route.snapshot.params.c_id;
      this._companydata.getCompanyById(this.c_id).subscribe(
        (data: Company) => {
          data = data[0];
           this.c_name=data.c_name;
          this.c_emailid=data.c_emailid;
          this.c_contactno=data.c_contactno;
          this.c_websitelink=data.c_websitelink;
          this.c_address=data.c_address;
          this.c_aboutcompany=data.c_aboutcompany;
        }
        );
        }
oncancle()
{
  this._router.navigate(['/companydisplay']);
}



      }
