import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductImageComponent } from './product/product-image/product-image.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { CardHighlightDirective } from './product/directives/card-highlight.directive';
import { FooterComponent } from './footer/footer.component';
import { PokemonTypeColorDirective } from './product/directives/pokemon-type-color.directive';
import { AddProductFormComponent } from './product/product-create/add-product-form/add-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ProductListComponent,
    ProductImageComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    CardHighlightDirective,
    FooterComponent,
    PokemonTypeColorDirective,
    AddProductFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
