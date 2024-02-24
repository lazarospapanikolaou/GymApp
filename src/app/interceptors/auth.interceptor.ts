import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Get the auth token from localStorage
        const authToken = localStorage.getItem('auth_token');

        // Clone the request and add the Authorization header
        const authRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        // Pass the cloned request to the next handler
        return next.handle(authRequest);
    }
}
