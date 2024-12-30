import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Observ2Component } from './Documentation/observ2/observ2.component';
import { Observ1Component } from './Documentation/observ1/observ1.component';

const routes: Routes = [

  {path: 'products',component:ProductsComponent},
  {path: 'products/:id',component:ProductsComponent},
  {path: 'products/:id/:name',component:ProductsComponent},
  {path: 'observ1',component:Observ1Component},
  {path: 'observ2',component:Observ2Component},
  {path: 'not-found',component:NotFoundComponent},
  {path: '**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
