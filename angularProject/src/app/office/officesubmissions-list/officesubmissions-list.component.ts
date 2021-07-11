import { Component, OnInit } from '@angular/core';
import {Submissionreport} from "../../submission/submissionreport";
import {OfficesubmissionsService} from "../officesubmissions.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-officesubmissions-list',
  templateUrl: './officesubmissions-list.component.html',
  styleUrls: ['./officesubmissions-list.component.css']
})
export class OfficesubmissionsListComponent implements OnInit {
  labourLicenseNo: string;
  submissionreports: Submissionreport[];


  constructor(private officeSubmissionService: OfficesubmissionsService, private router: Router, private route: ActivatedRoute) {
  }

  showSubmissionRecords(id: string) {
    this.router.navigate(['records', id]);
  }


  ngOnInit() {

    this.labourLicenseNo = this.route.snapshot.params['labourLicenseNo'];

    this.officeSubmissionService.showOfficeSubmissions(this.labourLicenseNo).subscribe(data => {
      console.log(data)
      this.submissionreports = data;
    }, error => console.log(error));

  }
}
