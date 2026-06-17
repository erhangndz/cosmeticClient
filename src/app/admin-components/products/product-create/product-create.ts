import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';
import { toSignal } from '@angular/core/rxjs-interop';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {

  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);

  product: Product = new Product();
  categories = toSignal(this.categoryService.getCategories())

  create(){
    this.productService.create(this.product).subscribe({
      complete: () => {

        alertifyjs.success('Ürün başarıyla eklendi')
        this.router.navigate(['/admin/products'])
      },

      error: err => {
        alertifyjs.error('Ürün Eklenemedi')
        console.log(err)}
    })
  }


}
