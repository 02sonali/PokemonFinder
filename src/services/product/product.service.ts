import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let headers = new Headers();
    headers.append('Content-Type', 'text/html; charset=UTF-8');
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(productUrl);
  }
}
