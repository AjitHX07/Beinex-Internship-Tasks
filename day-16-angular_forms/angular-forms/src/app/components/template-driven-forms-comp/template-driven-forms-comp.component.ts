import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms-comp.component.html',
  styleUrl: './template-driven-forms-comp.component.scss'
})
export class TemplateDrivenFormsCompComponent {
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

      alert("login Success")

      form.resetForm();
    }
  }
}