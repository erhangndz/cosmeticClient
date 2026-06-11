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

getById(id){

  return this.http.get<Category>(this.baseUrl+ id);

}


update(id,model:Category){

  return this.http.put(this.baseUrl+id,model);
}


create(model:Category){
return this.http.post(this.baseUrl,model);

}

delete(id){
  return this.http.delete(this.baseUrl+id);
}





}
