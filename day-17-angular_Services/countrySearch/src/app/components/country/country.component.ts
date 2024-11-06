import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../../Interface/interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  totalItems: number = 0;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries(this.searchTerm, this.currentPage, this.pageSize)
      .subscribe((response: { data: Country[]; total: number; }) => {
        this.countries = response.data;
        this.totalItems = response.total;
      });
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadCountries();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCountries();
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}