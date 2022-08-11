import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    public setToken(token: string): void {
        localStorage.setItem('fsbx-token', token);
    }

    public getToken(): string | null {
        return localStorage.getItem('fsbx-token');
    }
}
