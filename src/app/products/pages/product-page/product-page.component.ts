import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product?: Product;
  message?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') as string;
      if (id) {
        this.productsService.getById(+id).subscribe(
          product => {
            this.product = product;
            console.log(product.title);
          }
        );
      }
    });
    if (!this.product) {
      this.message = 'Pas de produit trouvé';
    }
  }

}
