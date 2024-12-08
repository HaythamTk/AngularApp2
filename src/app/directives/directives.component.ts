import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isActionHappen:boolean = false;
  hasError:boolean = false;
  hasSucess:boolean =true;
  hasSpecial:boolean=true;
  servers = ["server1","server2","server3"];
  servers2=[
    {"id":1,"name":"haytham,"},
    {"id":2,"name":"khaled,"}
  ];
  serverStyles={
    "color" :"red",
  }
  serverClasses={
    "sucess":this.hasSucess,
    "error":this.hasError,
    "special":this.hasSpecial

  }

  onActionHappen()
  {
    this.isActionHappen= true;
  }
}
