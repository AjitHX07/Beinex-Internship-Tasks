import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  private authService = inject(UserService);
  private router = inject(Router);

  user = computed(() => this.authService.getCurrentUser());

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}