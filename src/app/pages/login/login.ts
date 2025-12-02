import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();

    if (!this.auth.login(this.email, this.password)) {
      this.error = 'Credenciales incorrectas';
      return;
    }

    this.router.navigate(['/']);
  }
}
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';