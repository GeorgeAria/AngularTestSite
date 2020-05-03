//"BrowserModule" allows us to use the ngIf and ngFor structural directives in our HTML templates.
//"HttpClientModule" allows us to use the "HttpClient" service in our "product.service.ts" file (or any other class).

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { TradeShiftModule } from './trade-shift/trade-shift.module';

//"@NgModule" is a decorator that tells Angular that this is an Angular module.

@NgModule({

//"declarations" allows us to use the values within the Components that we import.
//For example, we could use the "selector" value from another component and use it's HTML template.

  declarations: [
    AppComponent,
    WelcomeComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    TradeShiftModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
