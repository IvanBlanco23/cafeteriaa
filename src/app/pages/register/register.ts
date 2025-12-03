import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {

  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    const ok = this.auth.register(this.email, this.password);

    if (!ok) {
      this.error = "Este correo ya está registrado.";
      return;
    }

    window.dispatchEvent(new Event('storage'));
    this.router.navigate(['/menu']);
  }
}
