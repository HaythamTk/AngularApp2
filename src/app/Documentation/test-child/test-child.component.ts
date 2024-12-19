import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-test-child',
  standalone: false,
  
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.scss'
})
export class TestChildComponent {
  @Input()product : {name:string};
}
