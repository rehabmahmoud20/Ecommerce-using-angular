import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogeComponent } from './confirm-dialoge/confirm-dialoge.component';




@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent,
    ConfirmDialogeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatDialogModule

  ],exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
  // exports[
  //   LogInComponent
  // ]
})
export class AuthmoduleModule { }
