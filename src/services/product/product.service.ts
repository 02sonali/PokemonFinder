import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject: BehaviorSubject<any>;
  private products: Observable<any>;
  constructor(private http: HttpClient) {
    let allProducts = this.getAdminProducts();
    this.productsSubject = new BehaviorSubject<any>(allProducts);
    this.products = this.productsSubject.asObservable();
  }

  getProducts(url) {
    return this.http.get(url);
  }

  getAdminProducts() {
    let allKeys =  Object.keys(localStorage);
    let allProducts = [];
    for(let key of allKeys) {
      if(key.includes('Product')){
        allProducts.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    return allProducts;
  }

  getProductDetails(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(url);
  }

  getSpeciesInfo(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(`${url}`)
  }

  searchProduct(userInput:String) {
    let url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(url);
  }

  addProduct(product:Object) {
    localStorage.setItem(`Product_${product.name.split(' ').join('_')}`, JSON.stringify(product));
    // this.productsSubject.next(product);
  }
}
