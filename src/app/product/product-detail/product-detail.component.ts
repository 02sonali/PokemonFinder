import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  product:any = null;
  speciesInfo:any = null;
  genusInfo: Object = null;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    this.productService.getProductDetails(url).subscribe({
      next: product => {
        this.product = product;
        this.productService.getSpeciesInfo(this.product.species.url).subscribe({
          next: itemDetails => {
            this.speciesInfo = itemDetails;
            this.genusInfo = this.speciesInfo.genera.find(species => species.language.name === "en");
          }
        });
      }
    });
   
  }
}
