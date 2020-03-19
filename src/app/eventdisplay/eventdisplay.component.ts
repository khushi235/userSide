import { Component, OnInit } from '@angular/core';
import { event } from './event';
import { EventdataService } from '../eventdata.service';

@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css']
})
export class EventdisplayComponent implements OnInit {

  constructor(public _eventdata:EventdataService) { }
    event_id:number[]=[];
   event_type: string[]=[];
   event_name:string[]=[];
   event_date:string[]=[];
   event_venue:string[]=[];
   event_time:string[]=[];
   event_fees:string[]=[];

  arr:event[]=[];
  ngOnInit() {
    this._eventdata.getAllevent().subscribe(
      (data:event[])=>{

        console.log(data);
        this.arr=data;
      }
    );
    }

}

