import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[pattern_1_center]',
  standalone: true
})
export class Pattern_1_center {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.justifyContent = 'center';
    el.nativeElement.style.alignItems = 'center';
  }

}
