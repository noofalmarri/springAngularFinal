import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UploadfileServiceService} from "../uploadfile-service.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-uploadfile-list',
  templateUrl: './uploadfile-list.component.html',
  styleUrls: ['./uploadfile-list.component.css']
})
export class UploadfileListComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';


  constructor(private uploadService: UploadfileServiceService) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }
  }
  ngOnInit(): void {
  }

}
