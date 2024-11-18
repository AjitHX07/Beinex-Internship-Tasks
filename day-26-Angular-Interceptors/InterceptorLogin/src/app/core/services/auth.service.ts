import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { finalize, map, Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../features/auth/models/auth';
import { Router } from '@angular/router';

interface UserResponse {
  id: string;
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    // Simulate login with JSONPlaceholder's /users endpoint
    return this.http.get(`${this.apiUrl}/users/1`).pipe(
      map((response: unknown) => {
        const userResponse = response as UserResponse;
        return {
          token: 'mock-jwt-token-' + Math.random(),
          user: {
            id: userResponse.id,
            email: userResponse.email,
            name: userResponse.name
          }
        };
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}