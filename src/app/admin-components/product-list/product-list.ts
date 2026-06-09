import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

title:string = "Ürünler Listesi"

//products:string[] = ["Rimel","Ruj","Deodorant"]

products: Product[] = [
  {id:1,name:"Rimel",price:1500.50,imageUrl:"https://tse1.mm.bing.net/th/id/OIP.TUwf_fKCAqFKJ_sb9KvEVwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:2,name:"Ruj",price:1000.50,imageUrl:"test.jpg"},
  {id:3,name:"Deodorant",price:500.50,imageUrl:"test.jpg"}
 ]




}
