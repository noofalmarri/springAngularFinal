import { Injectable } from '@angular/core';
import {Submissionreport} from "../submission/submissionreport";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OfficesubmissionsService {

  private submissionsUrl: string;

  submissions: Submissionreport[];

  constructor(private http: HttpClient) {
    this.submissionsUrl = 'http://localhost:8080/submissions';
  }

  public findAll(): Observable<Submissionreport[]> {
    return this.http.get<Submissionreport[]>(`http://localhost:8080/allsubmissionreport`);
  }

  public save(submission: Submissionreport) {
    return this.http.post<Submissionreport>((`http://localhost:8080/addReport`), submission);
  }

  public getOfficeSubmissions(id: number): Submissionreport[]{
    return this.submissions.filter((h: any) => h.buid === id);
  }

  public showOfficeSubmissions(labourLicenseNo: string): Observable<Submissionreport[]> {
    return this.http.get<Submissionreport[]>(`${this.submissionsUrl}/${labourLicenseNo}`);
  }


  public getSubmission(id: number): Submissionreport{
    return this.submissions.find((h: any) => h.buid === id);
  }

}
