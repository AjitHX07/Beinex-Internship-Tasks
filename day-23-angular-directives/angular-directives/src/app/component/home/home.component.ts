import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeFontStyleDirective } from '../../directives/change-font-style.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChangeFontStyleDirective, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  fontColor: string = 'red';
  fontWeight: string = 'normal';
  trigger: 'hover' | 'click' = 'hover';
  isActive: boolean = true;

}
