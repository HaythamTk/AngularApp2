import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-observ1',
  standalone: false,
  
  templateUrl: './observ1.component.html',
  styleUrl: './observ1.component.scss'
})
export class Observ1Component implements OnInit {
  /**
   *
   */
  activated:boolean = false;
  constructor(private service : Service1Service) {
 
  
  }
  ngOnInit(): void {
    this.service.activatedEmitter.subscribe((data)=> {
      this.activated = data;
    })
  }
 
}
