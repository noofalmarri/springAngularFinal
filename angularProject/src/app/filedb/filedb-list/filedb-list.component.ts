import { Component, OnInit } from '@angular/core';
import {Filedb} from "../filedb";
import {FiledbserviceService} from "../filedb-service.service";

@Component({
  selector: 'app-filedb-list',
  templateUrl: './filedb-list.component.html',
  styleUrls: ['./filedb-list.component.css']
})
export class FiledbListComponent implements OnInit {
  filedbs: Filedb[];
  constructor(private filedbService: FiledbserviceService) { }

  ngOnInit() {
    this.filedbService.findAll().subscribe(data => {
      this.filedbs = data;
    })
  }

}
