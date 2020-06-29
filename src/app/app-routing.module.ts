import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'home', component: ProductListComponent},
  {path:'product/:id', component: ProductDetailComponent},
  {path:'product-create', component: ProductCreateComponent},
  {path:'product-list', component: AdminProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
