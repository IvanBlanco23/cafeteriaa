import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const ok = this.auth.login(this.email, this.password);

    if (!ok) {
      this.error = 'Credenciales incorrectas';
      return;
    }

    const user = this.auth.getUser();

    if (user?.role === 'admin') {
      this.router.navigate(['/admin-menu']);
    } else if (user?.role === 'staff') {
      this.router.navigate(['/staff-queue']);
    } else {
      this.router.navigate(['/menu']);
    }
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
