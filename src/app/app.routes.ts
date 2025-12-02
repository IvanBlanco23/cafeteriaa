import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { MenuComponent } from './pages/menu/menu';
import { CartComponent } from './pages/cart/cart';
import { OrderStatusComponent } from './pages/order-status/order-status';
import { StaffQueueComponent } from './pages/staff-queue/staff-queue';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu';

import { authGuard } from './guards/auth.guards';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'menu', component: MenuComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'order-status', component: OrderStatusComponent, canActivate: [authGuard] },

  { path: 'staff-queue', component: StaffQueueComponent, canActivate: [authGuard] },
  { path: 'admin-menu', component: AdminMenuComponent, canActivate: [authGuard] },
];
