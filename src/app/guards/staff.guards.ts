import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

export function staffGuard() {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.getUser();

  // No logueado → fuera
  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  // Solo staff o admin
  if (user.role !== 'staff' && user.role !== 'admin') {
    router.navigate(['/']);
    return false;
  }

  return true;
}
