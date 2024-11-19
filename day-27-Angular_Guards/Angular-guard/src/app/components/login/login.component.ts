import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private userService = inject(UserService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  // Add error message property
  loginError: string | null = null;

  // Predefined test users for reference
  testUsers = [
    { email: 'admin@test.com', password: 'admin123' },
    { email: 'user@test.com', password: 'user123' }
  ];

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  onSubmit(): void {
    // Reset error message
    this.loginError = null;

    // Safely trim form values
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');

    if (emailControl && typeof emailControl.value === 'string') {
      emailControl.setValue(emailControl.value.trim(), { emitEvent: false });
    }

    if (passwordControl && typeof passwordControl.value === 'string') {
      passwordControl.setValue(passwordControl.value.trim(), { emitEvent: false });
    }

    console.log('Form Valid:', this.loginForm.valid);
    console.log('Form Values:', this.loginForm.value);

    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value?.trim() ?? '';
      const password = this.loginForm.get('password')?.value?.trim() ?? '';

      if (!email || !password) {
        console.error('Email or password is null or empty');
        this.loginError = 'Please enter both email and password';
        return;
      }

      console.log('Attempting login with:', email);

      const loginResult = this.userService.login(email, password);

      console.log('Login Result:', loginResult);

      if (loginResult) {
        const route = this.userService.isAdmin() ? '/admin-dashboard' : '/user-dashboard';

        console.log('Navigating to:', route);

        this.router.navigate([route]);
      } else {
        // Suggest test users if login fails
        this.loginError = `Login failed. Try these test users: 
          Admin: admin@test.com / admin123
          User: user@test.com / user123`;
        console.error('Login failed');
      }
    } else {
      console.error('Form is invalid', this.loginForm.errors);
      this.loginError = 'Please correct the form errors';
    }
  }
}
