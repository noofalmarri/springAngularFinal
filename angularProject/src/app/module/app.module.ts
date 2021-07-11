import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../app.component';
import { OfficeListComponent } from '../office/office-list/office-list.component';
import { OfficeFormComponent } from '../office/office-form/office-form.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OfficeserviceService} from "../office/officeservice.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CsvfileListComponent } from '../csvFile/csvfile-list/csvfile-list.component';
import { FiledbListComponent } from '../filedb/filedb-list/filedb-list.component';
import { SubmissionListComponent } from '../submission/submission-list/submission-list.component';
import { UploadfileListComponent } from '../uploadFile/uploadfile-list/uploadfile-list.component';
import { ContentvalidationListComponent } from '../contentvalidation/contentvalidation-list/contentvalidation-list.component';
import {CsvfileServiceService} from "../csvFile/csvfile-service.service";
import {FiledbserviceService} from "../filedb/filedb-service.service";
import {SubmissionreportServiceService} from "../submission/submissionreport-service.service";
import {UploadfileServiceService} from "../uploadFile/uploadfile-service.service";
import {ContentvalidationServiceService} from "../contentvalidation/contentvalidation-service.service";
import { AdlsauserListComponent } from '../user/adlsa-user/adlsauser-list/adlsauser-list.component';
import { RecruitmentuserListComponent } from '../user/recruitment-user/recruitmentuser-list/recruitmentuser-list.component';
import {RecruitmentUserService} from "../user/recruitment-user/recruitment-user.service";
import {AdlsaUserService} from "../user/adlsa-user/adlsa-user.service";
import { SubmissionContentListComponent } from '../submissioncontent/submission-content-list/submission-content-list.component';
import {SubmissioncontentService} from "../submissioncontent/submissioncontent.service";
import { ValidationDrillDrownListComponent } from '../contentvalidation/validation-drill-drown-list/validation-drill-drown-list.component';
import {ValidationdrilldownService} from "../contentvalidation/validationdrilldown.service";
import { OfficesubmissionsListComponent } from '../office/officesubmissions-list/officesubmissions-list.component';
import {OfficesubmissionsService} from "../office/officesubmissions.service";
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { BoardAdminComponent } from '../board-admin/board-admin.component';
import { BoardModeratorComponent } from '../board-moderator/board-moderator.component';
import { BoardUserComponent } from '../board-user/board-user.component';
import {AuthService} from "../service/auth.service";
import {AuthInterceptor, authInterceptorProviders} from "../helper/auth.interceptor";
import {UserService} from "../service/user.service";
import {TokenStorageService} from "../service/token-storage.service";
import {AdlsaComponent} from "../adlsa/adlsa.component";
import {RecruitmentComponent} from "../recruitment/recruitment.component";




@NgModule({
  declarations: [
    AppComponent,
    OfficeListComponent,
    OfficeFormComponent,
    CsvfileListComponent,
    FiledbListComponent,
    SubmissionListComponent,
    UploadfileListComponent,
    ContentvalidationListComponent,
    SubmissionContentListComponent,
    ValidationDrillDrownListComponent,
    OfficesubmissionsListComponent,
    AdlsauserListComponent,
    RecruitmentuserListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AdlsaComponent,
    RecruitmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [OfficeserviceService, CsvfileServiceService,FiledbserviceService, SubmissionreportServiceService,UploadfileServiceService, ContentvalidationServiceService, RecruitmentUserService, AdlsaUserService, SubmissioncontentService, ValidationdrilldownService, OfficesubmissionsService, , AuthService, AuthInterceptor, UserService, TokenStorageService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
