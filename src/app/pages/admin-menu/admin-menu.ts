import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  templateUrl: './admin-menu.html',
  styleUrls: ['./admin-menu.css'],
  imports: [CommonModule, FormsModule]
})
export class AdminMenuComponent {

  menu: any[] = [];
  editing: any = null;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

  startEdit(item: any) {
    this.editing = { ...item };
  }

  saveEdit() {
    this.menuService.update(this.editing);
    this.menu = this.menuService.getMenu();
    this.editing = null;
  }

  delete(id: number) {
    this.menuService.delete(id);
    this.menu = this.menuService.getMenu();
  }

  createNew() {
    this.editing = { name: '', price: 0 };
  }

  addNew() {
    this.menuService.add(this.editing);
    this.menu = this.menuService.getMenu();
    this.editing = null;
  }
}
