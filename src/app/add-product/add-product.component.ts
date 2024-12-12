import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: false,
  
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  name:string;
  @Output() productCreated=new EventEmitter<{productName:string}>;

  onAddProduct()
  {
    this.productCreated.emit({productName:this.name});
  }
}
