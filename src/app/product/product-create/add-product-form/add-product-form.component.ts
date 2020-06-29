import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.sass']
})
export class AddProductFormComponent implements OnInit {

  registrationFields= {name: "", price: "", description: "", phone:"", phoneType: "", category: "", image: "" };
  // @Output() addEvent = new EventEmitter();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // this.addEvent.emit(form.value);
    this.productService.addProduct(form.value);

  }

}
