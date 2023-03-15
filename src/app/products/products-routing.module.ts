import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {ProductDetailPageComponent} from "./pages/product-detail-page/product-detail-page.component";

const routes: Routes = [
  {path: '', component: ProductsPageComponent},
  {path: ':id', component: ProductDetailPageComponent},
  {path: '**', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
