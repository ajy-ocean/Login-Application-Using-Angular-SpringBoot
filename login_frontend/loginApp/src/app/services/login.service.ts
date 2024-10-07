import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  generateToken(credentials: any) {
    return this.http.post(`${this.baseUrl}/token`, credentials);
  }

  login(token: string): boolean {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
    return true;
  }

  isLoggedIn(): boolean {
    if (typeof window === 'undefined') return false;

    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): boolean {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    return true;
  }

  getToken(): string | null {
    if (typeof window === 'undefined') return null;

    return localStorage.getItem('token');
  }
}
