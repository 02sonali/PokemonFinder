import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(url) {
    return this.http.get(url);
  }

  getProductDetails(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(url);
  }

  getSpeciesInfo(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  }

  searchProduct(userInput:String) {
    let url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data; boundary=something');
    return this.http.get(url);
  }
}
