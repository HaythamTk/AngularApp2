import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path: 'products',component:ProductsComponent},
  {path: 'products/:id',component:ProductsComponent},
  {path: 'products/:id/:name',component:ProductsComponent},
  {path: 'not-found',component:NotFoundComponent},
  {path: '**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
