import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {filter, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL: string = 'https://fakestoreapi.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API_URL}/products`);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.API_URL}/products/${id}`);
  }

  getWithLimit(limit: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API_URL}/products?limit=${limit}`);
  }

  getBestsellers(count: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API_URL}/products`)
      .pipe(map(products => products.filter(product => product.rating.count >= count)
    ));
  }
}
