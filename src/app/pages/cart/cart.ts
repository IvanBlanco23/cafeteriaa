import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule]
})
export class CartComponent {

  cart: any[] = [];

  constructor(
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const storedCart = localStorage.getItem("cart");
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(i: number) {
    this.cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  checkout() {
    const user = this.auth.getUser();
    const id = this.orderService.createOrder(this.cart, user);

    this.cart = [];
    localStorage.removeItem("cart");

    this.router.navigate(['/order-status', id]);
  }

  payOnline() {
    const total = this.getTotal();

    alert(`Redirigiendo a pasarela de pago...\nTotal a pagar: $${total}`);

    this.checkout(); 
  }

  
}
