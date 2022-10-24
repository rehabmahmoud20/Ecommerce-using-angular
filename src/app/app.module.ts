import { addToFavourite } from './favouriteList/favorite.action';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatSliderModule } from '@angular/material/slider';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProducCardComponent } from './produc-card/produc-card.component';
import { ProducListComponent } from './produc-list/produc-list.component';
// import { LogInComponent } from './authmodule/log-in/log-in.component';
// import { RegisterComponent } from './authmodule/register/register.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthmoduleModule } from './authmodule/authmodule.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { favouriteProdReducer } from './favouriteList/favourite.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { LoaderComponent } from './loader/loader.component';
import { StdDegressPipe } from './std-degress.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    ProducCardComponent,
    ProducListComponent,
    // LogInComponent,
    // RegisterComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    WishlistComponent,
    FavListComponent,
    LoaderComponent,
    StdDegressPipe,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // MatSliderModule,
    NgbModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    // FontAwesomeModule,
    AuthmoduleModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({addFavourite:favouriteProdReducer},{}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
