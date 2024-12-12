import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  standalone: false,
  
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  @Input()services:[{type:string,name:string,content:string}];
}
