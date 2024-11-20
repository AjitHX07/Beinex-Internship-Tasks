import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import d3, { axisBottom, axisLeft, line, max, scaleBand, scaleLinear, select } from 'd3';
import { LineChartData } from '../../../interface/chart';
import { lineChartData } from '../data/chart_data';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild('lineChartContainer') private chartContainer!: ElementRef;

  private data = [
    { date: 'JAN', value: 5 },
    { date: 'FEB', value: 8 },
    { date: 'MAR', value: 25 },
    { date: 'APR', value: 9 },
    { date: 'MAY', value: 12 }
  ];

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const containerWidth = this.chartContainer.nativeElement.offsetWidth || 500;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = containerWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Clear any existing SVG
    select(this.chartContainer.nativeElement).selectAll('svg').remove();

    // Create SVG
    const svg = select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up scales
    const xScale = scaleBand()
      .domain(this.data.map(d => d.date))
      .range([0, width])
      .padding(0.1);

    const yScale = scaleLinear()
      .domain([0, max(this.data, d => d.value) || 0])
      .range([height, 0]);

    // Create line
    const lineGenerator = line<any>()
      .x(d => (xScale(d.date) || 0) + xScale.bandwidth() / 2)
      .y(d => yScale(d.value));

    // Add axes
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(axisBottom(xScale));

    svg.append('g')
      .call(axisLeft(yScale));

    // Add line path
    svg.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', '#2196F3')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

    // Add points
    svg.selectAll('circle')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('cx', d => (xScale(d.date) || 0) + xScale.bandwidth() / 2)
      .attr('cy', d => yScale(d.value))
      .attr('r', 4)
      .attr('fill', '#2196F3');
  }
}