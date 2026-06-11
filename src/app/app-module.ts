import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './admin-components/product-list/product-list';
import { CategoryList } from './admin-components/category-list/category-list';
import { provideHttpClient } from '@angular/common/http';
import { CategoryUpdate } from './admin-components/category-update/category-update';
import { FormsModule } from '@angular/forms';
import { CategoryCreate } from './admin-components/category-create/category-create';

@NgModule({
  declarations: [App, ProductList, CategoryList, CategoryUpdate, CategoryCreate],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
