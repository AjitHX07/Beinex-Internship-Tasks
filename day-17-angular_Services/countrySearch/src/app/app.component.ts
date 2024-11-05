import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryComponent } from "./components/country/country.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'countrySearch';
}
