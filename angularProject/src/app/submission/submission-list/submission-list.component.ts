import { Component, OnInit } from '@angular/core';
import {Submissionreport} from "../submissionreport";
import {SubmissionreportServiceService} from "../submissionreport-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {
  submissionreports: Submissionreport[];
  constructor(private submissionReportService: SubmissionreportServiceService, private router: Router) { }

  showSubmissionRecords(id: string) {
    this.router.navigate(['records', id]);
  }

  ngOnInit() {
    this.submissionReportService.findAll().subscribe(data =>{
      this.submissionreports = data;
    })
  }

}
