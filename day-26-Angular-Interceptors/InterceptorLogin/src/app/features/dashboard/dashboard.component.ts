import { Component, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user$ = signal<any>(null);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      // Simulate getting user data
      this.user$.set({
        name: 'John Doe',
        email: 'john@example.com'
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
