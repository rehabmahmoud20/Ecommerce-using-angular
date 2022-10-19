import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  FormArray,
} from '@angular/forms';
// import{AuthService}from'../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  check: boolean = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private _Router: Router) {
    this.registerForm = this.fb.group({
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      Email: ['', [Validators.required, Validators.email]],
      Username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      Password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/
          ),
          Validators.minLength(8),
        ],
      ],
      // Password:['',[Validators.required,Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$/)]],

      confirm_password: ['', [Validators.required, Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/
      ),
      Validators.minLength(8)]],
    });
  }
// confirm(){
//   if(this.registerForm.controls['confirmPassword'].touched && !this.registerForm.controls['confirmPassword'].errors){
//     this.check = this.registerForm.controls['password'].value === this.registerForm.controls['confirmPassword'].value ;
//   }
// }

  get formControls() {
    return this.registerForm.controls;
  }
  submitRegister(formInformation: FormGroup) {
    console.log(formInformation.dirty);
    this._Router.navigate(['login']);
  }
  ngOnInit(): void {}
}
