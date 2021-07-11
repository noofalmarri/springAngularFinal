import { Injectable } from '@angular/core';
import {Csvfile} from "../csvFile/csvfile";
import {Submissionreport} from "../submission/submissionreport";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SubmissioncontentService {

  private submissionContentUrl: string;

  records: Csvfile[];
  submissions: Submissionreport[];

  constructor(private http: HttpClient) {
    this.submissionContentUrl = 'http://localhost:8080/records';
  }

  public findAll(): Observable<Csvfile[]> {
    return this.http.get<Csvfile[]>(`http://localhost:8080/products`);
  }

  public save(record: Csvfile) {
    return this.http.post<Csvfile>((`http://localhost:8080/addProduct`), record);
  }

  public getSubmissionRecords(id: number): Csvfile[]{
    return this.records.filter((h: any) => h.csvID === id);
  }

  public showSubmissionRecords(id: string): Observable<Csvfile[]> {
    return this.http.get<Csvfile[]>(`${this.submissionContentUrl}/${id}`);
  }


  public getSubmission(id: number): Submissionreport{
    return this.submissions.find((h: any) => h.buid === id);
  }

}
