import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-staff-queue',
  standalone: true,
  templateUrl: './staff-queue.html',
  styleUrls: ['./staff-queue.css'],
  imports: [CommonModule]
})
export class StaffQueueComponent {

  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getPendingOrders();
  }

  updateStatus(id: number, status: 'pendiente' | 'preparando' | 'listo' | 'entregado') {
    this.orderService.updateOrderStatus(id, status);
    this.orders = this.orderService.getPendingOrders();
  }
}
