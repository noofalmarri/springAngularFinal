import { Component, OnInit } from '@angular/core';
import {Office} from "../office";
import {ActivatedRoute, Router} from "@angular/router";
import {OfficeserviceService} from "../officeservice.service";

@Component({
  selector: 'app-office-form',
  templateUrl: './office-form.component.html',
  styleUrls: ['./office-form.component.css']
})
export class OfficeFormComponent implements OnInit {
  office: Office;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private officeServiceService: OfficeserviceService) {
    this.office = new Office();
  }
  onSubmit() {
    this.officeServiceService.save(this.office).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/offices']);
  }

  ngOnInit() {
  }

}
