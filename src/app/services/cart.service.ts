import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = "cart";

  private getStoredCart(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || "[]");
  }

  private saveCart(cart: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  addToCart(item: any): void {
    const cart = this.getStoredCart();
    cart.push(item);
    this.saveCart(cart);
  }

  getCart(): any[] {
    return this.getStoredCart();
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
  }
}
