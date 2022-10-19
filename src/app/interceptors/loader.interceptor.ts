import { Injectable } from '@angular/core';
import{LoaderService} from '../services/loader.service';
import { finalize } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _LoaderService:LoaderService) {}

  intercept(

    request: HttpRequest<unknown>,

    next: HttpHandler

  ): Observable<HttpEvent<unknown>> {

   

    this._LoaderService.setingLoader(true);

    return next

      .handle(request)

      .pipe(finalize(() =>  this._LoaderService.setingLoader(false)));

  }
}
