import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  standalone: false
})
export class BasicHighlightDirective {
  @Input() defaultColor:string ="gray";
  @Input() highlightColor:string ="gray";
 @HostBinding('style.backgroundColor') backGroundColor : string;

 
  constructor(private element:ElementRef) {
   // this.element.nativeElement.style.backgroundColor="lightgray"
   }

   @HostListener('mouseenter') onMouseEnter(eventData:Event)
   {
     //this.element.nativeElement.style.backgroundColor="lightgray"
     this.backGroundColor = this.highlightColor;
   }
   @HostListener('mouseleave') onMouseLeave(eventData:Event)
   {
    this.backGroundColor = this.defaultColor;

   }




}
