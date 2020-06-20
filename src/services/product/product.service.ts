import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts() {
    let productUrl = " http://pokeapi.co/api/v2/pokemon/?limit=30 &offset=0";
    return this.http.get(productUrl);
  }

  getProductDetails(url) {
    let productUrl = url;
    return this.http.get(productUrl);
  }
}
