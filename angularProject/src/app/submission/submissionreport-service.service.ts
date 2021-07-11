import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Submissionreport} from "./submissionreport";

@Injectable()
export class SubmissionreportServiceService {
  private subUrl: string;
  constructor(private http: HttpClient) {
    this.subUrl = 'http://localhost:8080/allsubmissionreport';
  }
  public findAll(): Observable<Submissionreport[]> {
    return this.http.get<Submissionreport[]>(this.subUrl);
  }

  public save(submissionreport: Submissionreport) {
    return this.http.post<Submissionreport>(this.subUrl, submissionreport);
  }
}
