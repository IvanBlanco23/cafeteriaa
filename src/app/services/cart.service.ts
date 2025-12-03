import { Injectable } from '@angular/core';
import { OrderService } from './order.service';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private orderService: OrderService) {}

  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(item: any) {
    const cart = this.getCart();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }

  removeItem(index: number) {
    const cart = this.getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  checkoutOrder() {
    const cart = this.getCart();
    const user = this.getUser();

    const orderId = this.orderService.createOrder(cart, user);

    this.clearCart();

    return orderId;
  }

  private getUser() {
    return JSON.parse(localStorage.getItem("user") || "null");
  }
}
