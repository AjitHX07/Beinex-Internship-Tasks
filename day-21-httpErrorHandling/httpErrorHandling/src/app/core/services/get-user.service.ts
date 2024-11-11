import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://jsonplaceholder.typicode.com/users"

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]);
      })
    );
  }
}