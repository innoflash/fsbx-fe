import { Injectable } from '@angular/core';
import { ParentAuthGuard } from "./parent-auth.guard";

@Injectable({
    providedIn: 'root'
})
export class GuestGuard extends ParentAuthGuard {
    protected redirectUrl = '/dashboard';
    protected shouldBeLoggedIn = false;
}
