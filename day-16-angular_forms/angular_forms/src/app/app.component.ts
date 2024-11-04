import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from "./components/template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateDrivenFormComponent, ReactiveFormComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_forms';
}
