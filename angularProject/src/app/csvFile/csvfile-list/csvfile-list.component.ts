import { Component, OnInit } from '@angular/core';
import {Csvfile} from "../csvfile";
import {CsvfileServiceService} from "../csvfile-service.service";

@Component({
  selector: 'app-csvfile-list',
  templateUrl: './csvfile-list.component.html',
  styleUrls: ['./csvfile-list.component.css']
})
export class CsvfileListComponent implements OnInit {
  csvfiles: Csvfile[];
  constructor(private csvfileServiceService: CsvfileServiceService) { }
  ngOnInit() {
    this.csvfileServiceService.findAll().subscribe(data => {
      this.csvfiles = data;
    })
  }
}
