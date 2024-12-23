import { Component } from '@angular/core';
import { COURSES } from '../Data/db-data';
import { ActivatedRoute, Router } from '@angular/router';

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
  id:number;

  /**
   *
   */
 constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }
  //get data from link
  ngOnInit()
  {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id)
      alert(this.id);
    
  }
   
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
