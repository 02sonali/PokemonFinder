import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})

export class ProductCreateComponent implements OnInit {
  registrationFields= {name: "", price: 0, description: "", phone:"", phoneType: "", category: "", image: "" };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationFields);
  }

}

