import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem("users");
      if (!storedUsers) {
        localStorage.setItem("users", JSON.stringify([
          { email: "admin@cafe.com", password: "123456", role: "admin" },
          { email: "user@cafe.com", password: "123456", role: "user" }
        ]));
      }
    }
  }

  private getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }

  private saveUsers(users: any[]) {
    localStorage.setItem("users", JSON.stringify(users));
  }

 login(email: string, password: string): boolean {
  const users = this.getUsers();
  const user = users.find((u: any) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  }

  return false;
}

register(email: string, password: string): boolean {
  const users = this.getUsers();

  if (users.some((u: any) => u.email === email)) {
    return false;
  }

  const newUser = {
    email,
    password,
    role: "user"
  };

  users.push(newUser);
  this.saveUsers(users);

  localStorage.setItem("user", JSON.stringify(newUser));

  return true;
}


  logout() {
    localStorage.removeItem("user");
  }

  isLogged(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem("user");
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user") || "null");
  }
}
