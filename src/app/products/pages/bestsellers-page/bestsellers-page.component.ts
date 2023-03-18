import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-bestsellers-page',
  templateUrl: './bestsellers-page.component.html',
  styleUrls: ['./bestsellers-page.component.scss']
})
export class BestsellersPageComponent implements OnInit {

  title = 'Meilleures ventes';
  count = 400;
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.productsService.getBestsellers(this.count).subscribe(
      products => this.products = products
    );
  }
}
