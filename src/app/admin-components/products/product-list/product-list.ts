import { Component, inject } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

private productService = inject(ProductService);
private router = inject(Router);
title:string = "Ürünler Listesi"


products = toSignal(this.productService.getAll())


delete(id){

  Swal.fire({
  title: "Silmek istediğinize emin misiniz?",
  text: "Bu işlemi geri alamazsınız!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Evet, Sil!",
  cancelButtonText: "İptal"
}).then((result) => {
  if (result.isConfirmed)

    this.productService.delete(id).subscribe({
      complete: () => {
         Swal.fire({
    title: "Silindi!",
    text: "Ürün başarıyla silindi.",
    icon: "success"
  });
          window.location.reload()
      }
    })


});



}




}
