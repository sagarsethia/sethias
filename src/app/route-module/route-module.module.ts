import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([ 
    { path: 'welcome', component: WelcomeComponent },
    { path: '', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RouteModuleModule { }
