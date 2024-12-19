import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component';
import { Test2ChildComponent } from '../test2-child/test2-child.component';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-lesson1',
  standalone: false,
  
  templateUrl: './lesson1.component.html',
  styleUrl: './lesson1.component.scss'
})
export class Lesson1Component implements OnInit,AfterViewInit,OnChanges  {


  constructor(private service1: Service1Service) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.service1.print();
  }

@ViewChild(Test2ChildComponent) test :Test2ChildComponent;

 isHovered: boolean = false;
 productName:string ="";
 productId:number = 1;
 products: {name:string}[] = [];
 isAddedProduct : boolean = false;
 
 ngOnInit(): void {
  //throw new Error('Method not implemented.');
}
ngAfterViewInit(): void {
 
    console.log('ngAfterViewInit: First TestChildComponent instance:', this.test.name);
  
}
 onAddProduct()
 {
   this.products.push({
    name:this.productName
   });
   this.productName ="";
 }
 onMouseEnter()
 {
  this.isHovered = true; 
 }
 onMouseLeave() {
  this.isHovered = false; 
}
}
