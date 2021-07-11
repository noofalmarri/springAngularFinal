import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TokenStorageService} from "../service/token-storage.service";

@Injectable()
export class UploadfileServiceService {
  private baseUrl = 'http://localhost:8080';
  currentUser: any;


  constructor(private http: HttpClient, private token:TokenStorageService) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const user = this.token.getUser();

    const req = new HttpRequest('POST', `${this.baseUrl}/upload/${user.username}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

}
