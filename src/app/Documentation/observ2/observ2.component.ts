import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-observ2',
  standalone: false,
  
  templateUrl: './observ2.component.html',
  styleUrl: './observ2.component.scss'
})
export class Observ2Component {

  constructor(private service : Service1Service) {
 
  
  }
 
  onActivate()
  {
    this.service.activatedEmitter.next(true);
  }
}
