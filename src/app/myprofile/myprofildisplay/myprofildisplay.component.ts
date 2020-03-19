import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentdataService } from 'src/app/studentdata.service';
import { Student } from '../student';

@Component({
  selector: 'app-myprofildisplay',
  templateUrl: './myprofildisplay.component.html',
  styleUrls: ['./myprofildisplay.component.css']
})
export class MyprofildisplayComponent implements OnInit {
   s_id:number;
  s_name:string="";
  s_emailid:string="";
  s_contactno:string="";
  s_gender:string="";
  s_address: string="";
   s_awards:string="";
  s_currentstatus:string="";
 constructor(private _act_route: ActivatedRoute,public _studentdata:StudentdataService,public _router:Router) { }

    ngOnInit()
     {
      this.s_id = this._act_route.snapshot.params.s_id;
      this._studentdata.getstudentbyid(this.s_id).subscribe(
        (data: Student) => {
          // data = data[0];
          console.log(data);
          this.s_name =data.s_name;
          this.s_emailid=data.s_emailid;
          this.s_contactno=data.s_contactno;
          this.s_gender=data.s_gender;
          this.s_awards=data.s_awards;
          this.s_currentstatus=data.s_currentstatus;
        }
        );
        }
      }

