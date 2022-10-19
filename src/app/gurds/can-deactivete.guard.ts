import { MatDialogModule } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
// import { RegisterComponent } from './../register/register.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import{RegisterComponent} from '../authmodule/register/register.component'
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogeComponent } from '../authmodule/confirm-dialoge/confirm-dialoge.component';


@Injectable({
  providedIn: 'root'
})
export class CanDeactiveteGuard implements CanDeactivate<RegisterComponent> {
  constructor(private _MatDialog:MatDialog){}
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if (component.registerForm.dirty){
    const confirmdilog = this._MatDialog.open(ConfirmDialogeComponent)
 return   confirmdilog.afterClosed()
}
    else{
      return of(true)
    }

  }
  
}


