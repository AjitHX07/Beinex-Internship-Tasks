import { Country } from './../Interface/interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries: Country[] = [
    { id: 1, name: 'United States', capital: 'Washington DC', population: 331002651, region: 'Americas' },
    { id: 2, name: 'United Kingdom', capital: 'London', population: 67886011, region: 'Europe' },
    { id: 3, name: 'France', capital: 'Paris', population: 67391582, region: 'Europe' },
    { id: 4, name: 'Germany', capital: 'Berlin', population: 83783942, region: 'Europe' },
    { id: 5, name: 'Japan', capital: 'Tokyo', population: 125836021, region: 'Asia' },
    { id: 6, name: 'Australia', capital: 'Canberra', population: 25499884, region: 'Oceania' },
    { id: 7, name: 'Brazil', capital: 'Brasília', population: 212559417, region: 'Americas' },
    { id: 8, name: 'Canada', capital: 'Ottawa', population: 37742154, region: 'Americas' },
    { id: 9, name: 'India', capital: 'New Delhi', population: 1380004385, region: 'Asia' },
    { id: 10, name: 'China', capital: 'Beijing', population: 1439323776, region: 'Asia' },
  ];

  getCountries(searchTerm: string, page: number, pageSize: number): Observable<{ data: Country[], total: number }> {
    let filteredCountries = this.countries;

    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm) ||
        country.capital.toLowerCase().includes(searchTerm) ||
        country.region.toLowerCase().includes(searchTerm)
      );
    }

    const total = filteredCountries.length;
    const start = (page - 1) * pageSize;
    const paginatedData = filteredCountries.slice(start, start + pageSize);

    return of({
      data: paginatedData,
      total: total
    });
  }
}
