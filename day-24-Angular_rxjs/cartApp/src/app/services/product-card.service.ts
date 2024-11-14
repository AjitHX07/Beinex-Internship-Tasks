import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of, shareReplay, tap } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getProducts(): Observable<Product[]> {
    this.loading.next(true);
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap((data) => {
        console.log('Products received from API:', data); // Log the data received
        this.loading.next(false);
      }),
      catchError(error => {
        console.error('Error loading products:', error);
        alert('Failed to load products. Please check your network connection.');
        this.loading.next(false);
        return of([]);
      }),
      finalize(() => this.loading.next(false))
    );
  }
}