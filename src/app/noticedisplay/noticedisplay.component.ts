import { Component, OnInit } from '@angular/core';
import { notice } from './notice';
import { NoticedataService } from './noticedata.service';

@Component({
  selector: 'app-noticedisplay',
  templateUrl: './noticedisplay.component.html',
  styleUrls: ['./noticedisplay.component.css']
})
export class NoticedisplayComponent implements OnInit {

  constructor(public _noticedata:NoticedataService) { }
  notice_id:number[]=[];
  notice_date:Date[]=[];
  notice_title:string[]=[];
  notice_file:string[]=[];
arr:notice[]=[];
  ngOnInit() {
    this._noticedata.getAllnotice().subscribe(
      (data:notice[])=>{

        console.log(data);
        this.arr=data;
      }
    );

  }

  }
