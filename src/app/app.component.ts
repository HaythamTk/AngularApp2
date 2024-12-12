import { AfterViewInit, Component, Input, input, ViewChild } from '@angular/core';
import { COURSES } from './Data/db-data';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'AgularApp';
  services:any=[{"type":"service","name":"service1","content":"lorem ipsum"},
    {"type":"service","name":"service2","content":"lorem ipsum"}
  ];

  @ViewChild('cardItem') card: CardItemComponent;

  
  ngAfterViewInit(): void {
    console.log(this.card);

  }

  courses=COURSES;

  onAddService(serviceData:{serviceName:string,serviceContent:string})
  {
    this.services.push({
      name:serviceData.serviceName,
      type:"service",
      content:serviceData.serviceContent
    });
  }
  onAddCategory(serviceData:{serviceName:string,serviceContent:string})
  {
    this.services.push({
      name:serviceData.serviceName,
      type:"category",
      content:serviceData.serviceContent
    });
  }

}
