import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [NavbarComponent],
    
    imports: [CommonModule,FontAwesomeModule,AppRoutingModule],
  exports: [NavbarComponent,AppRoutingModule,FontAwesomeModule],

})
export class SharedModule {}
