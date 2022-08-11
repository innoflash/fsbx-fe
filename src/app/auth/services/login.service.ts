import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginRequestData, LoginResponse } from "../config/auth.types";
import { Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { TokenService } from "../../services/token.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public constructor(
        private readonly http: HttpClient,
        private readonly tokenService: TokenService) {
    }

    public login(credentials: LoginRequestData): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${ environment.apiUrl }/api/login`, credentials).pipe(
            tap(res => this.tokenService.setToken(res.data.api_access_token))
        );
    }
}
