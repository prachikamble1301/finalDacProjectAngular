import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HomeComponent } from './home/home.component';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';
import { EditByAdminComponent } from './edit-by-admin/edit-by-admin.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { SearchMyselfComponent } from './search-myself/search-myself.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OtpComponent } from './otp/otp.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateMyselfComponent } from './update-myself/update-myself.component';
import { AuthGuard } from './auth.guard';
import { FaqComponent } from './faq/faq.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AdminDashComponent,
    HomeComponent,
    VoterRegistrationComponent,
    EditByAdminComponent,
    TrackStatusComponent,
    SearchMyselfComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    OtpComponent,
    AboutComponent,
    ContactComponent,
    UpdateMyselfComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"register",component:RegisterComponent},
      {path:"login",component:LoginComponent},
      {path:"dash",component:DashboardComponent,canActivate:[AuthGuard]},
      {path:"adminDisplay",component:AdminDashComponent,canActivate:[AuthGuard]},
      {path:"home",component:HomeComponent},
      {path:"voterRegistration",component:VoterRegistrationComponent,canActivate:[AuthGuard]},
      {path:'edit/:regId',component:EditByAdminComponent,canActivate:[AuthGuard]},
      {path:"trackStatus",component:TrackStatusComponent,canActivate:[AuthGuard]},
      {path:"searchMyself",component:SearchMyselfComponent,canActivate:[AuthGuard]},
      {path:"forgot",component:ForgotpasswordComponent},
      {path:"otp",component:OtpComponent},
      {path:"resetpassword",component:ResetpasswordComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"update",component:UpdateMyselfComponent,canActivate:[AuthGuard]},
      {path:"faq",component:FaqComponent},
      


    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
