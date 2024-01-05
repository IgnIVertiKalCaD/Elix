import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent {
  @Input()
  type: 'critical' | 'maintenance'

}
