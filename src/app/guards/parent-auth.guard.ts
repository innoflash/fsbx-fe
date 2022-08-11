import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { TokenService } from "../services/token.service";

@Injectable()
export abstract class ParentAuthGuard implements CanLoad {
    protected abstract shouldBeLoggedIn: boolean;
    protected abstract redirectUrl: string;

    public constructor(private readonly tokenService: TokenService, private readonly router: Router) {
    }

    public canLoad(): boolean {
        const hasToken = !!this.tokenService.getToken();

        if (hasToken === this.shouldBeLoggedIn) {
            return true;
        }

        return !this.router.navigate([this.redirectUrl]);
    }
}