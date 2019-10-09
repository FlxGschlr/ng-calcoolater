import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from './service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IcInterceptor} from './ic.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IcInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
