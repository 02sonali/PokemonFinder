import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products: any = []; //TODO-create array interface here instaead of any
  errorMsg: String = "";
  nextUrl: String = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";
  previousUrl:String = "";
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts(this.nextUrl);
  }

  getProducts(url):void {
    this.productService.getProducts(url).subscribe({
      next: products => {
        this.products = products;
        this.nextUrl = products.next;
        this.previousUrl = products.previous;
      },
      error: err=> this.errorMsg = err
    })
  }

  getNext():void{
    console.log("get next");
    this.getProducts(this.nextUrl);
  }

  getPrevious():void {
    console.log("get previous");
    this.getProducts(this.previousUrl);
  }

  getProductId(url) {
    let arr = url.split('/');
    return arr[arr.length - 2];
  }

}
