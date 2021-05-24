import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from './core/services/auth.service';
import {APIInterceptor} from './shared/http-resources/api.interceptor';
import {ErrorInterceptor} from './shared/http-resources/error.interceptor';
import {TokenInterceptor} from './shared/http-resources/token.interceptor';
import {AlertService} from './shared/alert/alert.service';
import {HomeModule} from './modules/home/home.module';
import {ActionService} from './core/services/action.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthService,
    AlertService,
    ActionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
