import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
