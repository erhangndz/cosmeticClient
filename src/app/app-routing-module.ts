import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './admin-components/product-list/product-list';
import { CategoryList } from './admin-components/category-list/category-list';
import { CategoryUpdate } from './admin-components/category-update/category-update';
import { CategoryCreate } from './admin-components/category-create/category-create';

const routes: Routes = [

{path:'products', component: ProductList},
{path:'categories',component:CategoryList},
{path:'categories/update/:id',component:CategoryUpdate},
{path:'categories/create',component:CategoryCreate}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
