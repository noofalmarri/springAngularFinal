import { Component, OnInit } from '@angular/core';
import {Contentvalidation} from "../contentvalidation";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidationdrilldownService} from "../validationdrilldown.service";

@Component({
  selector: 'app-validation-drill-drown-list',
  templateUrl: './validation-drill-drown-list.component.html',
  styleUrls: ['./validation-drill-drown-list.component.css']
})
export class ValidationDrillDrownListComponent implements OnInit {

  id: string;
  contentvalidation: Contentvalidation;

  constructor(private route: ActivatedRoute,private router: Router,
              private recordRecordStatusService: ValidationdrilldownService) { }

  ngOnInit() {
    this.contentvalidation = new Contentvalidation();

    this.id = this.route.snapshot.params['id'];

    this.recordRecordStatusService.getRecordStatus(this.id)
      .subscribe(data => {
        console.log(data)
        this.contentvalidation = data;
      }, error => console.log(error));
  }

}
