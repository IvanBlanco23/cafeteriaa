import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-stats.html',
  styleUrls: ['./admin-stats.css']
})
export class AdminStatsComponent {

  totalVentas = 0;
  totalPedidos = 0;
  pendientes = 0;
  preparando = 0;
  listos = 0;
  entregados = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    const orders = this.orderService.getOrdersRaw();

    this.totalVentas = orders.reduce((sum: number, o: any) => sum + o.total, 0);
    this.totalPedidos = orders.length;

    this.pendientes = orders.filter((o: any) => o.status === "pendiente").length;
    this.preparando = orders.filter((o: any) => o.status === "preparando").length;
    this.listos = orders.filter((o: any) => o.status === "listo").length;
    this.entregados = orders.filter((o: any) => o.status === "entregado").length;
  }
}
