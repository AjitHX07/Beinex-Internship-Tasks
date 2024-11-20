import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import d3, { arc, pie, scaleOrdinal, select } from 'd3';
import { donutChartData } from '../data/chart_data';
import { DonutChartData } from '../../../interface/chart';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent implements AfterViewInit {
  @ViewChild('donutChartContainer') private chartContainer!: ElementRef;
  @ViewChild('tooltip') private tooltipElement!: ElementRef;

  private data = [
    { name: 'Category A', value: 30 },
    { name: 'Category B', value: 20 },
    { name: 'Category C', value: 50 }
  ];

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const containerWidth = this.chartContainer.nativeElement.offsetWidth || 400;
    const width = containerWidth;
    const height = width;
    const margin = 40;
    const radius = Math.min(width, height) / 2 - margin;

    // Clear any existing SVG
    select(this.chartContainer.nativeElement).selectAll('svg').remove();

    // Create SVG
    const svg = select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Set up colors
    const color = scaleOrdinal<string>()
      .domain(this.data.map(d => d.name))
      .range(['#2196F3', '#FFC107', '#4CAF50']);

    // Create pie generator
    const pieGenerator = pie<any>()
      .value(d => d.value);

    // Create arc generator
    const arcGenerator = arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);

    // Create tooltip
    const tooltip = select(this.tooltipElement.nativeElement);

    // Add arcs
    const arcs = svg.selectAll('path')
      .data(pieGenerator(this.data))
      .enter()
      .append('path')
      .attr('d', arcGenerator as any)
      .attr('fill', d => color(d.data.name))
      .on('mouseover', (event, d: any) => {
        tooltip
          .style('opacity', 1)
          .html(`${d.data.name}: ${d.data.value}%`)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`);
      })
      .on('mouseout', () => {
        tooltip.style('opacity', 0);
      });

    // Add labels
    const labelArc = arc()
      .innerRadius(radius * 0.8)
      .outerRadius(radius * 0.8);

    svg.selectAll('text')
      .data(pieGenerator(this.data))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d as any)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(d => `${d.data.value}%`)
      .style('fill', '#fff')
      .style('font-size', '12px');
  }
}