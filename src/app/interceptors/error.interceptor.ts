import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from "../services/notification.service";
import { NotificationType } from "../config/app.types";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    public constructor(private readonly notificationService: NotificationService) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log({ err });
                this.notificationService.show(err.message, NotificationType.ERROR);
                return throwError(() => err.error);
            })
        );
    }
}
