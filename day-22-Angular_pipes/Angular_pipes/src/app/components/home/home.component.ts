import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  longText: string = 'This is a sample long text that will be truncated using the custom truncate pipe for demonstration purposes.';
  shortText: string = 'This is a sample short text that will be truncated using '

}
