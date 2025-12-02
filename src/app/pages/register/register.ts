import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {

  email = "";
  password = "";
  error = "";

  constructor(private auth: AuthService, private router: Router) {}

  register(e: Event) {
    e.preventDefault();

    const ok = this.auth.register(this.email, this.password);

    if (!ok) {
      this.error = "Ese correo ya está registrado.";
      return;
    }

    this.router.navigate(['/menu']);
  }
}
