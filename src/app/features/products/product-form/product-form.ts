import { Component, output, input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    category: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.required
    ]),
    brand: new FormControl('', [
      Validators.required
    ]),
    stock: new FormControl('', [
      Validators.required
    ])
  });

  productCount = input.required<number>()
  addProduct = output<Product>();

  onSubmit() {
    const product: Product = {
      id: this.productCount() + 1,
      title: this.productForm.value.title ?? "",
      description: this.productForm.value.description ?? "",
      category: this.productForm.value.category ?? "",
      brand: this.productForm.value.brand ?? "",
      price: Number(this.productForm.value.price ?? 0),
      stock: Number(this.productForm.value.stock ?? 0)
    }

    this.addProduct.emit(product);
    this.productForm.reset();

  }
}
