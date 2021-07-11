import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Filedb} from "./filedb";

@Injectable()
export class FiledbserviceService {
  private filedbUrl: string;

  constructor(private http: HttpClient) {
    this.filedbUrl = 'http://localhost:8080//allfiledb';
  }

  public findAll(): Observable<Filedb[]> {
    return this.http.get<Filedb[]>(this.filedbUrl);
  }

  public save(fileDb: Filedb) {
    return this.http.post<Filedb>(this.filedbUrl, fileDb);
  }
}
