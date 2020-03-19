import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { routingArr } from './app.routing';
import {MyprofileComponent} from './myprofile/myprofile.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { NoticedisplayComponent } from './noticedisplay/noticedisplay.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MyprofildisplayComponent } from './myprofile/myprofildisplay/myprofildisplay.component';
import { MatListModule } from '@angular/material/list';
import { CompanydisplayComponent } from './companydisplay/companydisplay.component';
import { MaterialdisplayComponent } from './materialdisplay/materialdisplay.component';
import { EventdisplayComponent } from './eventdisplay/eventdisplay.component';
//import { ProfileeditComponent } from './myprofile/profileedit/profileedit.component';
import { EditMyProfileComponent } from './myprofile/edit-my-profile/edit-my-profile.component';
import { CompanyviewmoreComponent } from './companydisplay/companyviewmore/companyviewmore.component';
@ NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    PagenotfoundComponent,

    UserdashboardComponent,
    NoticedisplayComponent,
    MyprofildisplayComponent,
    CompanydisplayComponent,
    MaterialdisplayComponent,
    EventdisplayComponent,
   // ProfileeditComponent,
    EditMyProfileComponent,
    MyprofileComponent,
    CompanyviewmoreComponent
  ],
  imports: [
    BrowserModule,
    routingArr,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
