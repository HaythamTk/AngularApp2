import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input()product:{name:string};
  
  //productCreated:new EventListener

}
