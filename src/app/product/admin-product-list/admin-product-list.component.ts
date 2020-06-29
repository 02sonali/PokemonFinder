import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.sass']
})
export class AdminProductListComponent implements OnInit {
  products = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAdminProducts();
    console.log(this.products);
  }
}
