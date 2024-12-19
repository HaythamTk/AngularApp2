import { Component } from '@angular/core';

@Component({
  selector: 'app-test2-child',
  standalone: false,
  
  templateUrl: './test2-child.component.html',
  styleUrl: './test2-child.component.scss'
})
export class Test2ChildComponent {
  name:string = "haytham";
}
