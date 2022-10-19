import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader = new BehaviorSubject(false);
  laoderVal = this.loader.asObservable();

  constructor() {}
  setingLoader(val:boolean){
this.loader.next(val)
  }
}
