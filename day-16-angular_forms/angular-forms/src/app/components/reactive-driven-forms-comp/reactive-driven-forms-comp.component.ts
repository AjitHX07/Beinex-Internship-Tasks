// reactive-driven-forms-comp.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserData, UserDataHandlerService } from '../../services/user-data-handler.service';

@Component({
  selector: 'app-reactive-driven-forms-comp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-driven-forms-comp.component.html',
  styleUrl: './reactive-driven-forms-comp.component.scss'
})
export class ReactiveDrivenFormsCompComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  showForm = true;
  userData$: Observable<UserData[]>;

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataHandlerService
  ) {
    this.initializeForm();
    this.userData$ = this.userDataService.getUserData();
  }

  ngOnInit(): void { }

  private initializeForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      confirmPassword: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    }
    return null;
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    const { confirmPassword, password, ...userData } = this.userForm.value;
    this.userDataService.addUser(userData);

    // Reset form and state
    this.submitted = false;
    this.userForm.reset();
    this.showForm = false;
  }

  onDelete(id: number): void {
    this.userDataService.deleteUser(id);
  }

  onAddNew(): void {
    this.showForm = true;
    this.submitted = false;
    this.userForm.reset();
  }

  // Helper method to format date
  formatDate(date: Date): string {
    return new Date(date).toLocaleString();
  }
}