import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Observable } from 'rxjs';
import { Product } from '../../interface/product';
import { ProductCardService } from '../../services/product-card.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  // Observables for reactive data management
  products$: Observable<Product[]>;
  isCartEnabled$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private productService: ProductCardService,
    private cartService: CartService
  ) {
    this.isLoading$ = this.productService.getLoading();
    this.products$ = this.productService.getProducts();
    this.isCartEnabled$ = this.cartService.getCartEnabled();
  }

  ngOnInit(): void { }

  onAddToCart(product: Product): void {
    this.products$.subscribe({
      next: (products) => {
        console.log('Products available in component:', products); // Log products to ensure they are passed correctly
      },
      error: (err) => console.error('Error in product list subscription:', err)
    });
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}