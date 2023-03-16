import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product?: Product;

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
          product => this.product = product
        );
      }
    });
  }

}
