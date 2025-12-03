import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule]
})
export class CartComponent {

  cart: any[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  remove(index: number) {
    this.cartService.removeItem(index);
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  checkout() {
  const orderId = this.cartService.checkoutOrder();
  localStorage.setItem("currentOrderId", String(orderId));
  this.router.navigate(['/order-status'], { state: { orderId } });
}

}