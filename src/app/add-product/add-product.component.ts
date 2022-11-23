import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;
  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
  }

  ajouter(){
    console.log(this.product)
  }

}
