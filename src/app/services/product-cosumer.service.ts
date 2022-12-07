import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCosumerService {
  apiUrl:string = "http://localhost:3000/products"
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.apiUrl)
  }
  getProductById(id:number){
    return this.http.get<Product>(this.apiUrl+"/"+id)
  }
  addProduct(product:Product){
    return this.http.post(this.apiUrl,product)
  }
  updateProduct(product:Product){
    return this.http.put(this.apiUrl+'/'+product.id,product)
  }
  deleteProduct(id:number){
    return this.http.delete(this.apiUrl+"/"+id)
  }
}
