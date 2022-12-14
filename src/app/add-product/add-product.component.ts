import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!:any
  constructor(private _productService: ProductService,private _router:Router,private productConsumer:ProductCosumerService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id!=null){
      this.productConsumer.getProductById(this.id).subscribe({
        next : (data)=>this.product=data
      })
    }else {
      this.product = new Product();

    }
  }

  ajouter(){
    //this._productService.addProduct(this.product)
    if(this.id!=null){
      this.productConsumer.updateProduct(this.product).subscribe({
        next: ()=>this._router.navigateByUrl('/products'),
        error: (error)=>console.log(error),
        complete:()=>console.log("I m finishing")
      })
    }else {
    this.productConsumer.addProduct(this.product).subscribe({
      next: ()=>this._router.navigateByUrl('/products'),
      error: (error)=>console.log(error),
      complete:()=>console.log("I m finishing")
    })
  }
    // => routerLink="/products" HTML
    console.log(this.product)
  }

}
