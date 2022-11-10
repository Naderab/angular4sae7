import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id:'1',title:'T-shirt 1',quantity:10,price:100,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2698/987/800/2698987800_2_4_3.jpg?t=1661153423543'},
      {id:'2',title:'T-shirt 2',quantity:0,price:14,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2698/987/800/2698987800_2_4_3.jpg?t=1661153423543'},
      {id:'3',title:'T-shirt 3',quantity:20,price:35,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2698/987/800/2698987800_2_4_3.jpg?t=1661153423543'}
    ]
  }

  Buy(id:string){
    // this.products.map((product)=>{
    //   if(product.id.match(id)){
    //     product.quantity=product.quantity-1;
    //   }
    // })

    this.products.map((product)=>product.id.match(id)&&product.quantity--)
  }



}
