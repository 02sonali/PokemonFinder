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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err=> this.errorMsg = err
    })
  }

  getProductId(url) {
    let arr = url.split('/');
    return arr[arr.length - 2];
  }

}
