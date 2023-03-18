import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListPageComponent} from "./pages/product-list-page/product-list-page.component";
import {ProductDetailPageComponent} from "./pages/product-detail-page/product-detail-page.component";
import {BehaviorSubject} from "rxjs";
import {BestsellersPageComponent} from "./pages/bestsellers-page/bestsellers-page.component";

const routes: Routes = [
  {path: '', component: ProductListPageComponent},
  {path: 'bestsellers', component: BestsellersPageComponent},
  {path: ':id', component: ProductDetailPageComponent},
  {path: '**', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
