import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { debounceTime, fromEvent, map, Observable, Subscribable } from 'rxjs';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HttpClientModule,
    ProductListComponent,
    CartComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobileCartOpen = false;
  isMobile = window.innerWidth <= 1024;
  cartItemCount$: Observable<number> | Observable<any>;

  constructor(private cartService: CartService) {
    // Initialize the observable properly
    this.cartItemCount$ = this.cartService.getCartItems().pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );

    // Handle window resize event
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(250),
        map(() => window.innerWidth <= 1024)
      )
      .subscribe(isMobile => {
        this.isMobile = isMobile;
        if (!isMobile) {
          this.isMobileCartOpen = false;
        }
      });
  }

  toggleMobileCart(): void {
    this.isMobileCartOpen = !this.isMobileCartOpen;
  }
}