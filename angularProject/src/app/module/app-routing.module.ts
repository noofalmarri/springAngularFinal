import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeListComponent} from "../office/office-list/office-list.component";
import {OfficeFormComponent} from "../office/office-form/office-form.component";
import {CsvfileListComponent} from "../csvFile/csvfile-list/csvfile-list.component";
import {SubmissionListComponent} from "../submission/submission-list/submission-list.component";
import {FiledbListComponent} from "../filedb/filedb-list/filedb-list.component";
import {ContentvalidationListComponent} from "../contentvalidation/contentvalidation-list/contentvalidation-list.component";
import {UploadfileListComponent} from "../uploadFile/uploadfile-list/uploadfile-list.component";
import {RecruitmentuserListComponent} from "../user/recruitment-user/recruitmentuser-list/recruitmentuser-list.component";
import {AdlsauserListComponent} from "../user/adlsa-user/adlsauser-list/adlsauser-list.component";
import {SubmissionContentListComponent} from "../submissioncontent/submission-content-list/submission-content-list.component";
import {ValidationDrillDrownListComponent} from "../contentvalidation/validation-drill-drown-list/validation-drill-drown-list.component";
import {OfficesubmissionsListComponent} from "../office/officesubmissions-list/officesubmissions-list.component";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {ProfileComponent} from "../profile/profile.component";
import {BoardUserComponent} from "../board-user/board-user.component";
import {BoardAdminComponent} from "../board-admin/board-admin.component";
import {BoardModeratorComponent} from "../board-moderator/board-moderator.component";
import {RecruitmentComponent} from "../recruitment/recruitment.component";
import {AdlsaComponent} from "../adlsa/adlsa.component";

const routes: Routes = [
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'adlsa', component: AdlsaComponent},
  { path: 'offices', component: OfficeListComponent },
  { path: 'addoffice', component: OfficeFormComponent },
  { path: 'csvfiles', component: CsvfileListComponent},
  { path: 'upload', component: UploadfileListComponent},
  { path: 'allsubmissionreport', component: SubmissionListComponent},
  { path: 'allfiledb', component: FiledbListComponent},
  { path: 'errorMessage', component: ContentvalidationListComponent},
  { path: 'recruitmentUsers', component: RecruitmentuserListComponent},
  { path: 'adlsaUsers', component: AdlsauserListComponent},
  { path: 'records/:id', component: SubmissionContentListComponent},
  { path: 'recordStatuses/:id', component: ValidationDrillDrownListComponent},
  { path: 'submissions/:labourLicenseNo', component: OfficesubmissionsListComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
