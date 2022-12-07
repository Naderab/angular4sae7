import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { ProductCosumerService } from '../services/product-cosumer.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;
  email!:string
  constructor(private _productService: ProductService,private _router:Router,private productConsumer:ProductCosumerService) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  ajouter(){
    //this._productService.addProduct(this.product)
    this.productConsumer.addProduct(this.product).subscribe({
      next: ()=>this._router.navigateByUrl('/products'),
      error: (error)=>console.log(error),
      complete:()=>console.log("I m finishing")
    })
     
    // => routerLink="/products" HTML
    console.log(this.product)
  }

}
