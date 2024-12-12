import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-core',
  standalone: false,
  
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  
  @Output() serviceCreated=new EventEmitter<{serviceName:string,serviceContent:string}>;
  @Output() categoryCreated=new EventEmitter<{serviceName:string,serviceContent:string}>;
  name:string="";
  description:string="";
 

  onAddService()
  {
    this.serviceCreated.emit({serviceName:this.name,serviceContent:this.description});
  }
  onAddCategory()
  {
    this.categoryCreated.emit({serviceName:this.name,serviceContent:this.description});
  }
}
