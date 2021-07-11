import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Contentvalidation} from "./contentvalidation";

@Injectable()
export class ContentvalidationServiceService {
  private fileUrl: string;
  constructor(private http: HttpClient) {
    this.fileUrl = 'http://localhost:8080//errorMessage';
  }

  public findAll(): Observable<Contentvalidation[]> {
    return this.http.get<Contentvalidation[]>(this.fileUrl);
  }

  public save(contentValidation: Contentvalidation) {
    return this.http.post<Contentvalidation>(this.fileUrl, contentValidation);
  }
}
