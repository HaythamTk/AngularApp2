import { Component, ElementRef, EventEmitter, Output, output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-add-product2',
  standalone: false,
  
  templateUrl: './add-product2.component.html',
  styleUrl: './add-product2.component.scss'
})
export class AddProduct2Component {
 name:string;
 @Output()createdProduct = new EventEmitter<{productName:string}>;
 
 @ViewChild('productNameInput',{static:true}) productNameInput :ElementRef;
 onAddProduct()
 {
  this.createdProduct.emit({productName:this.name});
 }
 onAddProduct2(productNameInput:HTMLInputElement)
 {
  this.createdProduct.emit({productName:productNameInput.value});
 }
 onAddProduct3()
 {
  this.createdProduct.emit({productName:this.productNameInput.nativeElement.value});
 }
}
