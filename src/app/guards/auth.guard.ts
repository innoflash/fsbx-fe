import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ParentAuthGuard } from "./parent-auth.guard";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends ParentAuthGuard {
  protected redirectUrl = '/auth';
  protected shouldBeLoggedIn = true;
}
