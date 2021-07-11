import { Injectable } from '@angular/core';
import {ContentvalidationServiceService} from "./contentvalidation-service.service";
import {Contentvalidation} from "./contentvalidation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ValidationdrilldownService {
  private ContentValidationUrl: string;

  recordStatuses: Contentvalidation[];
  recordStatus: Contentvalidation;

  constructor(private http: HttpClient) {
    this.ContentValidationUrl = 'http://localhost:8080/recordStatuses';
  }

  getRecordStatus(id: string): Observable<any> {
    return this.http.get(`${this.ContentValidationUrl}/${id}`);
  }

  public getRecordStatuses(id: string): Contentvalidation[]{
    return this.recordStatuses.filter((h: any) => h.serialNo === id);
  }

  public showRecordStatus(id: string): Observable<Contentvalidation[]> {
    return this.http.get<Contentvalidation[]>(`${this.ContentValidationUrl}/${id}`);
  }
}
