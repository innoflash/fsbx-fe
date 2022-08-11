import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { TokenService } from "../services/token.service";

@Injectable()
export abstract class ParentAuthGuard implements CanActivate {
    protected abstract shouldBeLoggedIn: boolean;
    protected abstract redirectUrl: string;

    public constructor(private readonly tokenService: TokenService, private readonly router: Router) {
    }

    public canActivate(): boolean {
        const hasToken = !!this.tokenService.getToken();

        if (hasToken && this.shouldBeLoggedIn) {
            return true;
        }

        this.router.navigate([this.redirectUrl]);

        return false;
    }
}