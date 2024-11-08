import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivateGuard } from '@angular/ActivateGuard';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private activeG: ActivateGuard) { }

  checkBoxChange(_canActive: any) {

    this.activeG.
  }

}
