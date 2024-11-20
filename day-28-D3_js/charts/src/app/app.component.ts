import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutChartComponent } from './features/charts/donut-chart/donut-chart.component';
import { LineChartComponent } from './features/charts/line-chart/line-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LineChartComponent, DonutChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'charts';
}
