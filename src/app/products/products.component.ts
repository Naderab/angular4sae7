import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ProductCosumerService } from '../services/product-cosumer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  c!:number;
  constructor(private _productService: ProductService, private calcul:CalculService,private productConsumer:ProductCosumerService) { }

  ngOnInit(): void {
    //this.products = this._productService.productsList;
    this.productConsumer.getProducts().subscribe({
      next: (data)=>this.products=data, //code : 200 ,204
      error : (error)=>console.log(error),// code : 500 ,404
      complete : ()=>console.log("I m finshsing")
    })
  }

  Buy(id:string){
    // this.products.map((product)=>{
    //   if(product.id.match(id)){
    //     product.quantity=product.quantity-1;
    //   }
    // })

    this.products.map((product)=>product.id.match(id)&&product.quantity--)
  }

  message () { 
     
  this.c=this.calcul.getNumberOf(this.products,"quantity", 0); 
  
  }

  Delete(id:any){
    this.productConsumer.deleteProduct(id).subscribe({
      next: ()=>this.products = this.products.filter((p)=>p.id != id)
    });

  }



}
