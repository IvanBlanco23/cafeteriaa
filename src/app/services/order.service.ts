import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private getOrders(): Order[] {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  }

  private saveOrders(orders: Order[]) {
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  createOrder(cart: any[], user: any): number {
    const orders = this.getOrders();

    const newOrder: Order = {
      id: Date.now(),
      customer: user.email,
      items: cart,
      total: cart.reduce((sum: number, item: any) => sum + item.price, 0),
      status: "pendiente",
      date: new Date().toISOString()
    };

    orders.push(newOrder);
    this.saveOrders(orders);

    return newOrder.id;
  }

  getOrderById(id: number): Order | undefined {
    return this.getOrders().find((o: Order) => o.id === id);
  }

  getPendingOrders(): Order[] {
    return this.getOrders().filter((o: Order) => o.status !== "entregado");
  }

updateOrderStatus(
  id: number,
  status: 'pendiente' | 'preparando' | 'listo' | 'entregado'
): void {
  const orders = this.getOrders();
  const index = orders.findIndex((o: Order) => o.id === id);

  if (index !== -1) {
    orders[index].status = status;
    this.saveOrders(orders);
  }
}


  getStats() {
    const orders = this.getOrders();

    const totalVentas = orders.reduce((sum: number, o: Order) => sum + o.total, 0);
    const totalPedidos = orders.length;

    return { totalVentas, totalPedidos };
  }
}
