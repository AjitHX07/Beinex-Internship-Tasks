import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // Predefined users for testing
  private users: User[] = [
    { id: 1, email: 'admin@test.com', password: 'admin123', isAdmin: true },
    { id: 2, email: 'user@test.com', password: 'user123', isAdmin: false },
    // Add more test users if needed
  ];

  private currentUser = signal<User | null>(null);

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): boolean {
    // Trim inputs to remove any accidental whitespace
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    console.log('Login attempt (trimmed):', {
      email: trimmedEmail,
      passwordLength: trimmedPassword.length
    });

    // Find user by email and password
    const user = this.users.find(
      u => u.email.toLowerCase() === trimmedEmail && u.password === trimmedPassword
    );

    console.log('Found user:', user);

    if (user) {
      // Successfully found a matching user
      this.currentUser.set(user);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login successful for:', trimmedEmail);
      return true;
    }

    console.log('Login failed for:', trimmedEmail);
    return false;
  }

  logout(): void {
    console.log('Logging out user');
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    const isAuth = !!this.currentUser();
    console.log('Is Authenticated:', isAuth);
    return isAuth;
  }

  isAdmin(): boolean {
    const admin = this.currentUser()?.isAdmin || false;
    console.log('Is Admin:', admin);
    return admin;
  }

  getCurrentUser(): User | null {
    return this.currentUser();
  }
}