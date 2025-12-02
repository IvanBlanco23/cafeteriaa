import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.order = this.orderService.getOrderById(id);
  }
}
