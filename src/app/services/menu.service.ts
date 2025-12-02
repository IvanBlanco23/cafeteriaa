import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {

  constructor() {
    if (!localStorage.getItem('menu')) {
      localStorage.setItem('menu', JSON.stringify([
        { id: 1, name: "Café Americano", price: 30 },
        { id: 2, name: "Capuchino", price: 45 },
        { id: 3, name: "Chocolate", price: 40 }
      ]));
    }
  }

  private getMenuList() {
    return JSON.parse(localStorage.getItem('menu') || '[]');
  }

  private saveMenu(list: any[]) {
    localStorage.setItem('menu', JSON.stringify(list));
  }

  getMenu() {
    return this.getMenuList();
  }

  add(item: any) {
    const list = this.getMenuList();
    item.id = Date.now();
    list.push(item);
    this.saveMenu(list);
  }

  update(item: any) {
    const list = this.getMenuList();
    const i = list.findIndex((x: any) => x.id === item.id);
    if (i !== -1) {
      list[i] = item;
      this.saveMenu(list);
    }
  }

  delete(id: number) {
    const list = this.getMenuList().filter((item: any) => item.id !== id);
    this.saveMenu(list);
  }
}
