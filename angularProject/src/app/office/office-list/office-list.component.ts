import { Component, OnInit } from '@angular/core';
import {Office} from "../office";
import {OfficeserviceService} from "../officeservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {
  offices: Office[];
  constructor(private officeServiceService: OfficeserviceService, private router: Router) { }
  ngOnInit() {
    this.officeServiceService.findAll().subscribe(data => {
      this.offices = data;
    })
  }
  showOfficeSubmissions(labourLicenseNo: string) {
    this.router.navigate(['submissions', labourLicenseNo]);
  }
}
