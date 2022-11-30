import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  c!:number;
  constructor(private _productService: ProductService, private calcul:CalculService) { }

  ngOnInit(): void {
    this.products = this._productService.productsList;
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



}
