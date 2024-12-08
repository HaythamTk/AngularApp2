import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {
  serverId:number =20;
  serverStatus:string ="Online";
  allowedAddServer:boolean= false;
  serverCreationStatus:string ="No Server Was Creted";
  serverName:string ="";

  constructor()
  {
    setTimeout(() => {
      this.allowedAddServer = true;
    }, 3000);
  }
  getServerStatus()
  {
    return this.serverStatus;
  }
  onCreateServer()
  {
    this.serverCreationStatus ="Server Was Creted";
  }
}
