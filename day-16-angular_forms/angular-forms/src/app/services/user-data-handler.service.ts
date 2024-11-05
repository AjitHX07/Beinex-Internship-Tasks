import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserData {
  name: string;
  email: string;
  password: string;
  age: string;
  gender: string;
  id: number;
  submittedDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataHandlerService {
  private userData: UserData[] = [];
  private userDataSubject = new BehaviorSubject<UserData[]>([]);

  constructor() { }

  addUser(user: Omit<UserData, 'id' | 'submittedDate'>): void {
    const newUser: UserData = {
      ...user,
      id: this.generateId(),
      submittedDate: new Date()
    };

    this.userData.push(newUser);
    this.userDataSubject.next(this.userData);
  }

  getUserData(): Observable<UserData[]> {
    return this.userDataSubject.asObservable();
  }

  private generateId(): number {
    return this.userData.length > 0
      ? Math.max(...this.userData.map(user => user.id)) + 1
      : 1;
  }

  deleteUser(id: number): void {
    this.userData = this.userData.filter(user => user.id !== id);
    this.userDataSubject.next(this.userData);
  }
}