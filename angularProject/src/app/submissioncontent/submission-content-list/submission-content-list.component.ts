import { Component, OnInit } from '@angular/core';
import {Csvfile} from "../../csvFile/csvfile";
import {SubmissioncontentService} from "../submissioncontent.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-submission-content-list',
  templateUrl: './submission-content-list.component.html',
  styleUrls: ['./submission-content-list.component.css']
})
export class SubmissionContentListComponent implements OnInit {

  submissionId: string;
  csvfiles: Csvfile[];


  constructor(private submissionRecordService: SubmissioncontentService, private router: Router, private route: ActivatedRoute) {
  }

  showRecordStatus(id: string){
    this.router.navigate(['recordStatuses', id]);
  }


  ngOnInit() {

    this.submissionId = this.route.snapshot.params['id'];

    this.submissionRecordService.showSubmissionRecords(this.submissionId).subscribe(data => {
      console.log(data)
      this.csvfiles = data;
    }, error => console.log(error));

  }

}
