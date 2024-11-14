import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interface/cart-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;
  isCartEnabled$: Observable<boolean>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.getCartItems();
    this.totalAmount$ = this.cartService.getTotalAmount();
    this.isCartEnabled$ = this.cartService.getCartEnabled();
  }

  // Fixed toggleCart method to avoid recursion
  toggleCart(): void {
    this.cartService.getCartEnabled().subscribe({
      next: (currentValue) => {
        this.cartService.toggleCart(!currentValue);
      },
      complete: () => { }
    }).unsubscribe();
  }

  updateQuantity(itemId: number, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(itemId, quantity);
    }
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }
}