import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { NoticedisplayComponent } from './noticedisplay/noticedisplay.component';
import { MyprofildisplayComponent } from './myprofile/myprofildisplay/myprofildisplay.component';
import { CompanydisplayComponent } from './companydisplay/companydisplay.component';
import { MaterialdisplayComponent } from './materialdisplay/materialdisplay.component';
import { EventdisplayComponent } from './eventdisplay/eventdisplay.component';
import { CompanyviewmoreComponent } from './companydisplay/companyviewmore/companyviewmore.component';

const arr:Routes=[
  {path: '', component:UserdashboardComponent},
  {path:'myprofile',component:MyprofildisplayComponent},
 {path:'myprofileedit',component:MyprofileComponent},
 {path:'noticedisplay',component:NoticedisplayComponent},
 {path:'materialdisplay',component:MaterialdisplayComponent},
 {path:'eventdisplay',component:EventdisplayComponent},
 {path:'companydisplay',component:CompanydisplayComponent},
 {path:'companyviewmore/:c_id',component:CompanyviewmoreComponent},
  {path: '**',component:PagenotfoundComponent}


];
export const routingArr = RouterModule.forRoot(arr);
