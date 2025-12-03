import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
  imports: [CommonModule, FormsModule]
})
export class MenuComponent {

  menu: any[] = [];
  selected: any = null;

  custom = {
    size: "mediano",
    extras: [] as string[],
    notes: ""
  };

  constructor(private cart: CartService, private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

  openCustomize(item: any) {
    this.selected = item;

    this.custom = {
      size: "mediano",
      extras: [],
      notes: ""
    };
  }

  toggleExtra(extra: string) {
    if (this.custom.extras.includes(extra)) {
      this.custom.extras = this.custom.extras.filter(e => e !== extra);
    } else {
      this.custom.extras.push(extra);
    }
  }

  addCustomized() {
    const product = {
      ...this.selected,
      customization: { ...this.custom }
    };

    this.cart.addToCart(product);

    alert("Producto agregado al carrito");
    this.selected = null;
  }
}
