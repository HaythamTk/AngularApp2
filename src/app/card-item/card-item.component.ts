import { Component, Input } from '@angular/core';
import { ICourse } from '../../interface/course';
import { COURSES } from '../Data/db-data';

@Component({
  selector: 'app-card-item',
  standalone: false,
  
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input()course : ICourse;
  
  cardClasses()
  {
    if(this.course.category=="INTERMEDIATE")
       return "back-red";

      return "";
  }
}
