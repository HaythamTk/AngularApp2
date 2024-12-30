import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  activatedEmitter = new Subject<boolean>();
  constructor() { }

  print()
  {
    console.log("hello from service1");
  }
}
