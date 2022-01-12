import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': 'a150ed57e8msh67e51f75a2f021ep190c7cjsn7dfd4a85a9ab'
            },
            setParams: {
                key: '6033b4676a3b4e8399c5ab99816da2d4'
            }
        })
        return next.handle(req)
    } 
}