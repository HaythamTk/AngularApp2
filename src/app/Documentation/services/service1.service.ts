import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  print()
  {
    console.log("hello from service1");
  }
}
