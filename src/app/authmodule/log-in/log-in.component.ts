import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor(private _Router: Router, private _AuthService: AuthService) {
    this._AuthService.logedInValue.subscribe((val) => {
      console.log(val);
    });
    // console.log(this._AuthService.logedInValue)
  }
  handleSubmitForm(form: any) {
    // console.log(form.value)
    this._AuthService.changeLogInstate(true);
    this._Router.navigate(['/home']);
  }
  ngOnInit(): void {}
}
