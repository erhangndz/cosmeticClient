import { ProductService } from './../../../services/product-service';
import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';
import { toSignal } from '@angular/core/rxjs-interop';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-product-update',
  standalone: false,
  templateUrl: './product-update.html',
  styleUrl: './product-update.css',
})
export class ProductUpdate implements OnInit {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  product:Product= new Product();
  @Input() id:string;


  ngOnInit(): void {

    this.productService.getById(this.id).subscribe({
      next: data => {
          this.product =data
          this.cdr.detectChanges();

      }
    })

  }


categories = toSignal(this.categoryService.getCategories())

update(){
  this.productService.update(this.product.id,this.product).subscribe({
    complete: ()=>{
      alertifyjs.success('Ürün Güncellendi')
      this.router.navigate(['/admin/products'])
    },
    error: err =>{
      console.log(err)
      alertifyjs.error('Ürün Güncellenemedi')
    }
  })
}




}
