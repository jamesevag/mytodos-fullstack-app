import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler  ){
    let username='jamesevag';
    let password='jamesevag1991';
    let basicAuthHeader='Basic ' + window.btoa(username+':'+password);
    req=req.clone(

    {
      setHeaders : {
        Authorization : basicAuthHeader
      }
    }
    )

    return next.handle(req);
  }
}
