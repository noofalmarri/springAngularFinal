import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Csvfile} from "./csvfile";

@Injectable()
export class CsvfileServiceService {
  private fileUrl: string;
  constructor(private http: HttpClient) {
    this.fileUrl = 'http://localhost:8080//csvfiles';
  }

  public findAll(): Observable<Csvfile[]> {
    return this.http.get<Csvfile[]>(this.fileUrl);
  }

  public save(csvfile: Csvfile) {
    return this.http.post<Csvfile>(this.fileUrl, csvfile);
  }
}
