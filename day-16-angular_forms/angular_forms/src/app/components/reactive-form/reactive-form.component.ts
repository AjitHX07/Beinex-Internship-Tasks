import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,

  imports: [CommonModule, ReactiveFormsModule, BrowserModule, RouterOutlet],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)]],
      confirmPassword: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void { }

  // Getter to access form controls
  get f() { return this.userForm.controls; }

  // Custom validator for matching password
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  // Form submission handler
  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.userForm.invalid) {
      return;
    }

    // Process the data here
    console.log('Form submitted successfully!', this.userForm.value);
  }
}