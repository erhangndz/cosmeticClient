import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

/**
 *
 */
constructor(private http:HttpClient) {

}

baseUrl:string ="https://localhost:7000/api/categories/";

getCategories(){
  return this.http.get<Category[]>(this.baseUrl)
}




}
