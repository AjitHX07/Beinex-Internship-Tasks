import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  private authService = inject(UserService);
  private router = inject(Router);

  user = computed(() => this.authService.getCurrentUser());

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
