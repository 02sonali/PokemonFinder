import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.sass']
})
export class ProductImageComponent implements OnInit {

  constructor(private productService: ProductService) { }
  @Input() productDetailUrl: String;
  productDetail: any;

  ngOnInit(): void {
    this.productService.getProductDetails(this.productDetailUrl).subscribe({
      next: product => {
        this.productDetail = product;
        console.log(this.productDetail);
      }   
    })
  }

}
