import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Office} from "./office";

@Injectable()
export class OfficeserviceService {
  private officesUrl: string;

  constructor(private http: HttpClient) {
    this.officesUrl = 'http://localhost:8080/offices';
  }

  public findAll(): Observable<Office[]> {
    return this.http.get<Office[]>(this.officesUrl);
  }

  public save(office: Office) {
    return this.http.post<Office>(this.officesUrl, office);
  }
}
