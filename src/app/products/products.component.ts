import { Component } from '@angular/core';
import { COURSES } from '../Data/db-data';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    { name: 'product1' },
    { name: 'product2' }
  ];
  test1= COURSES[0];

onAddProduct(productData:{productName:string})
{
  this.products.push({
   name:productData.productName,
  });
}
onAddProduct2(productData:{productName:string})
{
  this.products.push({
   name:productData.productName,
  });
}
}
