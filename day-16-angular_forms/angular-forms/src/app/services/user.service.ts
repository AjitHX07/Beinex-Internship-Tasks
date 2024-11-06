import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  age: string;
  gender: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  addUser(userData: Omit<User, 'id' | 'createdAt'>): void {
    const newUser: User = {
      ...userData,
      id: this.generateId(),
      createdAt: new Date()
    };

    this.users = [...this.users, newUser];
    this.usersSubject.next(this.users);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.usersSubject.next(this.users);
  }

  private generateId(): number {
    return this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
  }
}
