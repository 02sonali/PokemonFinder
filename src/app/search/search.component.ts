import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router ) { }
  ngOnInit(): void {
  }

  searchItem(val) {
    let str = val.toLowerCase();
    if(str.length >= 3) {
      this.productService.searchProduct(str).subscribe({
        next: product => {
          let productName = product.name ? product.name.toLowerCase() : '';
          this.router.navigate(['/product', productName]);
        }
      })
    }
  }

}
