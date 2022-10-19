import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private IsLogedIn = new BehaviorSubject(false)
logedInValue = this.IsLogedIn.asObservable()
  constructor() { }
  changeLogInstate(val:boolean){
    this.IsLogedIn.next(val)
  }
}

