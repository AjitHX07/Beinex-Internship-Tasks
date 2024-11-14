import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem } from '../interface/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private isCartEnabled = new BehaviorSubject<boolean>(true);

  constructor() { }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  getCartEnabled(): Observable<boolean> {
    return this.isCartEnabled.asObservable();
  }

  toggleCart(enabled: boolean): void {
    this.isCartEnabled.next(enabled);
  }

  addToCart(item: CartItem): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, item]);
    }
  }

  updateQuantity(itemId: number, quantity: number): void {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    this.cartItems.next(updatedItems);
  }

  removeFromCart(itemId: number): void {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems.filter(item => item.id !== itemId));
  }

  getTotalAmount(): Observable<number> {
    return this.cartItems.pipe(
      map(items => items.reduce((total, item) => total + (item.price * item.quantity), 0))
    );
  }
}