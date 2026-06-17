import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './admin-components/products/product-list/product-list';
import { CategoryList } from './admin-components/categories/category-list/category-list';
import { CategoryUpdate } from './admin-components/categories/category-update/category-update';
import { CategoryCreate } from './admin-components/categories/category-create/category-create';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './main-components/home/home';
import { ProductCreate } from './admin-components/products/product-create/product-create';
import { ProductUpdate } from './admin-components/products/product-update/product-update';

const routes: Routes = [
//http://localhost:4200/admin/categories
//Admin Routes
{path:'admin',component:AdminLayout, children:[
{path:'products', component: ProductList},
{path:'products/create',component:ProductCreate},
{path:'products/update/:id',component:ProductUpdate},
{path:'categories',component:CategoryList},
{path:'categories/update/:id',component:CategoryUpdate},
{path:'categories/create',component:CategoryCreate}
]},

//Main Routes
{path:'',component:MainLayout, children:[
  {path:'',component:Home}


]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
