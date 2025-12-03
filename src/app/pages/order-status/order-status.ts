import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-status',
  standalone: true,
  templateUrl: './order-status.html',
  styleUrls: ['./order-status.css'],
  imports: [CommonModule]
})
export class OrderStatusComponent {

  order: any = null;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    const stateOrderId = history.state?.orderId;
    const savedId = Number(localStorage.getItem("currentOrderId"));

    const orderIdToLoad = stateOrderId || savedId;

    if (orderIdToLoad) {
      this.order = this.orderService.getOrderById(orderIdToLoad);
    }
  }
}
