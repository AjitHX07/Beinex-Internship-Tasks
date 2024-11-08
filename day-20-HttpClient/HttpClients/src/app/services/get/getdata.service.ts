import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://jsonplaceholder.typicode.com/posts"

  getPost(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
