import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class IcInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.indexOf('TODO') !== -1) {
      request.body.request = 'yay a response with body: ' + request.body.request;
      return of(new HttpResponse({status: 200, body: request.body.request}));
    }

    return next.handle(request);
  }
}
