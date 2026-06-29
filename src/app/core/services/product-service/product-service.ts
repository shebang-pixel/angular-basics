import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductResponse } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private productEndpoint = "https://dummyjson.com/products"

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.productEndpoint);
  }

}
