import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from "../services/token.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    public constructor(private readonly tokenService: TokenService) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!!this.tokenService.getToken()) {
            if (request.body instanceof FormData) {
                request = request.clone({
                    setHeaders: {
                        // @ts-ignore
                        'Authorization': `Bearer ${ this.tokenService.getToken() }`
                    }
                });

                return next.handle(request);
            }

            request = request.clone({
                setHeaders: {
                    ...this.getDefaultHeaders(),
                    // @ts-ignore
                    'Authorization': `Bearer ${ this.tokenService.getToken() }`
                }
            });

            return next.handle(request);
        }

        request = request.clone({
            setHeaders: this.getDefaultHeaders()
        });

        return next.handle(request);
    }

    private getDefaultHeaders(): { [key: string]: string } {
        return {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json'
            //'Access-Control-Allow-Origin': '*'
        };
    }
}
