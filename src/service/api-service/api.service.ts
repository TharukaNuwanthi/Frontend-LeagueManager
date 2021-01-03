import {Injectable} from '@angular/core';
import {ApiConstants} from './ApiConstants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {

  }

  generateMatch(): Observable<Object> {
    return this.http.get("http://localhost:8080/league/generate-match");
  }
}
