import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, CommonModule, RouterLink]
})
export class App implements OnDestroy {
  user: any = null;
  private onUserChanged = () => this.loadUser();

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.loadUser();
      window.addEventListener('user-changed', this.onUserChanged);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('user-changed', this.onUserChanged);
    }
  }

  loadUser() {
    this.user = this.auth.getUser();
    console.log('[App] user cargado ->', this.user); // debugging temporal
  }

  refreshUser() {
    this.loadUser();
  }
}
