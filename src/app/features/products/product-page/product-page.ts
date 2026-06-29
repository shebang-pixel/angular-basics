import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product-service/product-service';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';

@Component({
  selector: 'app-product-page',
  imports: [ProductItem, ProductForm],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  // page state
  products = signal<Product[]>([]);
  loading = signal(true);
  error = signal('');

  // inject product Service
  productService = inject(ProductService);

  // get product
  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe({
        next: data => {
          this.products.set(data.products);
          this.loading.set(false);
        },
        error: err => {
          this.error.set('An error occured when fetching Products');
          this.loading.set(false);
        }
      })
  }

  // compute Product
  productCount = computed(
    () => this.products.length
  )
  // upload product
  onProductAdd(product: Product) {
    this.products.update(
      products => [
        ...products,
        product
      ]
    );
  }

  // Delete product
  onProductDelete(id: number) {
    this.products.update(
      products => products.filter(
        product => product.id !== id
      )
    )
  }

}
