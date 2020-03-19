import { Component, OnInit } from '@angular/core';
import { StudentdataService } from '../studentdata.service';
import { Student } from './student';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private _studentdata:StudentdataService) { }
      s_address: string[]=[];
      s_availstartdate: Date[]=[];
      s_awards:string[]=[];
      s_currentstatus:string[]=[];
      s_othereducation:string[]=[];
      s_positionsought:string[]=[];
      s_profilepic:string[]=[];
      s_schoolname:string[]=[];
      s_siporgainization:string[]=[];
      s_siptitle:string[]=[];
      s_skills:string[]=[];
      arr:Student[]=[];
      ngOnInit() {
        this._studentdata.getAllstudent().subscribe(
          (data:Student[])=>{

            console.log(data);
            this.arr=data;
          }
        );

      }

      }
