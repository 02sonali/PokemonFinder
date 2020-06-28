import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.sass']
})
export class AddProductFormComponent implements OnInit {

  registrationFields= {name: "", price: "", description: "", phone:"", phoneType: "", category: "", image: "" };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
