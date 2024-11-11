import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { catchError, of, switchMap } from 'rxjs';
import { User } from '../interface/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  users$: any;
  constructor(private getuser: GetUserService) { }
  users: User[] = [];
  loading: boolean = false;
  error: string | null = null;

  ngOnInit(): void {
    this.loading = true;
    this.getuser.getUser()
      .pipe(
        catchError(err => {
          this.error = 'Failed to load user data';
          this.loading = false;
          return of([]);
        })
      )
      .subscribe(users => {
        this.users = users;
        this.loading = false;
      });
  }
}