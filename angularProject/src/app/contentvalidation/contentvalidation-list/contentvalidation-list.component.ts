import { Component, OnInit } from '@angular/core';
import {Contentvalidation} from "../contentvalidation";
import {ContentvalidationServiceService} from "../contentvalidation-service.service";

@Component({
  selector: 'app-contentvalidation-list',
  templateUrl: './contentvalidation-list.component.html',
  styleUrls: ['./contentvalidation-list.component.css']
})
export class ContentvalidationListComponent implements OnInit {
  contentvalidation: Contentvalidation[];
  constructor(private contentvalidationService: ContentvalidationServiceService) { }

  ngOnInit() {
    this.contentvalidationService.findAll().subscribe(data => {
      this.contentvalidation = data;
    })
  }

}
