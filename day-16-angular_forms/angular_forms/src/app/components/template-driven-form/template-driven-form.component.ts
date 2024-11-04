import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  confirmPassword: string = '';
  submittedData: any = null;

  onSubmit(form: any) {
    if (form.valid && this.userPassword === this.confirmPassword) {
      this.submittedData = {
        userName: this.userName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
      };
      form.resetForm();
    }
  }
}