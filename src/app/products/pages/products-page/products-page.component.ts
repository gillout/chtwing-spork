import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  title = 'Tous les produits';
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      products => this.products = products
    );
  }

  navigateToProduct(id: number) {
    this.router.navigate([`/products/${id}`]);
  }
}
