import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[rendered]',
  standalone: true
})
export class RenderedDirective {
  @Output() rendered = new EventEmitter<any>();
  ngAfterViewInit() {
    this.rendered.emit()
  }

}
