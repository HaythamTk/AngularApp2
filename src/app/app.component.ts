import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AgularApp';
  services:any=[];
  name:string="";
  description:string="";

  onAddService()
  {
    this.services.push({
      Name:this.name,
      Type:"service",
      Description:this.description
    });
  }
  onAddCategory()
  {
    this.services.push({
      Name:this.name,
      Type:"category",
      Dscription:this.description
    });
  }
}
