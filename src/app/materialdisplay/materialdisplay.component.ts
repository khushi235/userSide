import { Component, OnInit } from '@angular/core';
import { MaterialserviceService } from '../materialservice.service';
import { material } from './material';

@Component({
  selector: 'app-materialdisplay',
  templateUrl: './materialdisplay.component.html',
  styleUrls: ['./materialdisplay.component.css']
})
export class MaterialdisplayComponent implements OnInit {
  constructor(public _materialdata:MaterialserviceService) { }

  m_id:number[]=[];
  m_title:string[]=[];
  m_file:string[]=[];
  m_sub:string[]=[];
  m_uploaddate:Date[]=[];
  m_totalpages:number[]=[];
  arr:material[]=[];
  ngOnInit() {
    this._materialdata.getAllmaterial().subscribe(
      (data:material[])=>{

        console.log(data);
        this.arr=data;
      }
    );
    }

}

