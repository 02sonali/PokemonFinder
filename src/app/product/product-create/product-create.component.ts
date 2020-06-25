import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})

export class ProductCreateComponent implements OnInit {
  registrationFields= {name: "", price: "", description: "", availableQuantity:0, status:"active"};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationFields);
  }

}

