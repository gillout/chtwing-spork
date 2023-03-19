import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  title = '';
  count = 400;
  products: Product[] = [];
  products$!: Observable<Product[]>;

  pagesTitles = ['Meilleures ventes', 'Page de test'];
  fullRoutes = ['/products/bestsellers', '/products/test'];
  routes = ['bestsellers', 'test'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    // Pour le premier chargement de la page
    this.routesSwitch(this.router.url, this.pagesTitles, this.fullRoutes);

    // Pour le chargement lors de la modification de la route
    this.activatedRoute.url.subscribe(
      route => this.routesSwitch(route[0].path, this.pagesTitles, this.routes)
    );
  }

  routesSwitch(activeRoute: string, titles: string[], routes: string[]) {
    switch(activeRoute) {
      case routes[0]: {
        this.title = titles[0];
        this.products$ = this.productsService.getBestsellers(this.count);
        break;
      }
      case routes[1]: {
        this.title = titles[1];
        this.products$ = this.productsService.getWithLimit(10);
        break;
      }
      default: {
        this.title = 'Tous les produits';
        this.products$ = this.productsService.getAll();
        break;
      }
    }
    this.findInRoute('products', activeRoute);
  }

  findInRoute(routePart: string, currentRoute: string) {
    if (currentRoute.search(routePart) !== -1) {
      this.products$.subscribe(products => this.products = products);
    }
  }

}
