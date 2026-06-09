import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './admin-components/product-list/product-list';
import { CategoryList } from './admin-components/category-list/category-list';

const routes: Routes = [

{path:'products', component: ProductList},
{path:'categories',component:CategoryList}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
