
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product-list/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forChild([{path:'product',component:ProductComponent},
                             {path:'productdetails/:id',component:ProductDetailsComponent}]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        ProductDetailsComponent
    ]
})

export class ProductModule {
}