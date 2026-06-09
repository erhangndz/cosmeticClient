import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './admin-components/product-list/product-list';
import { CategoryList } from './admin-components/category-list/category-list';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, ProductList, CategoryList],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(),provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
