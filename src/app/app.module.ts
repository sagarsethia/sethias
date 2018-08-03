import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeModule } from './home/welcome.module';
import { ProductModule } from './product/product.module';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteModuleModule } from './route-module/route-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ProductModule,
    RouteModuleModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
