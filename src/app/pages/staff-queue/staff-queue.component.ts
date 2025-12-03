import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-queue',
  standalone: true,
  templateUrl: './staff-queue.html',
  styleUrls: ['./staff-queue.css'],
  imports: [CommonModule]
})
export class StaffQueueComponent {

  orders: any[] = [];

  ngOnInit() {
    this.loadOrders();
    window.addEventListener("storage", () => this.loadOrders());
  }

  loadOrders() {
    this.orders = JSON.parse(localStorage.getItem("orders") || "[]");
  }

  updateStatus(order: any, newStatus: string) {
  order.status = newStatus;

  let all = JSON.parse(localStorage.getItem("orders") || "[]");
  const index = all.findIndex((o: any) => o.id === order.id);

  if (index !== -1) {
    if (newStatus === "entregado") {
      all.splice(index, 1);
    } else {
      all[index] = order;
    }

    localStorage.setItem("orders", JSON.stringify(all));
    this.orders = all; // refrescar vista
    window.dispatchEvent(new Event("storage"));
  }
}}