import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

export interface UserForm {
  name: string;
  email: string;
  password: string;
  age: string;
  gender: string;
}


@Component({
  selector: 'app-template-driven-forms-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms-comp.component.html',
  styleUrl: './template-driven-forms-comp.component.scss'
})
export class TemplateDrivenFormsCompComponent {
  user: UserForm = {
    name: '',
    email: '',
    password: '',
    age: '',
    gender: ''
  };

  showForm = true;
  confirmPassword = '';

  ageGroups = [
    { value: 'under-18', label: 'Below 18' },
    { value: '19-24', label: '19 - 24' },
    { value: '25-32', label: '25 - 32' },
    { value: '33-above', label: '33 and Above' }
  ];

  constructor(public userService: UserService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    if (this.user.password !== this.confirmPassword) {
      form.form.setErrors({ passwordMismatch: true });
      return;
    }

    const { password, ...userData } = this.user;
    this.userService.addUser(userData);

    this.resetForm(form);
    this.showForm = false;
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.confirmPassword = '';
    this.user = {
      name: '',
      email: '',
      password: '',
      age: '',
      gender: ''
    };
  }

  onDelete(id: number): void {
    this.userService.deleteUser(id);
  }

  onAddNew(): void {
    this.showForm = true;
  }
}
