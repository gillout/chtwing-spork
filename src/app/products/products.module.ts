import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductListPageComponent} from './pages/product-list-page/product-list-page.component';
import {ProductDetailPageComponent} from './pages/product-detail-page/product-detail-page.component';
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";


@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonModule,
    RatingModule
  ]
})
export class ProductsModule {
}
