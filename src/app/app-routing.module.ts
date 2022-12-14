import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'add',component:AddProductComponent},
  {path:'update/:id',component:AddProductComponent},

  {path:'todolist', component: TodolistComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
