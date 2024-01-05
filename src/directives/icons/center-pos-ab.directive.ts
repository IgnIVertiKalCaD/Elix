import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[centerPosAb]',
  standalone: true
})
export class CenterPosAbDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.position = 'absolute';
    el.nativeElement.style.top = 0;
    el.nativeElement.style.bottom = 0;
    el.nativeElement.style.margin = 'auto 0';
  }

}
