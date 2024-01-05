import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chips',
  standalone: true,
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {

  @Input()
  OS: string;

  @Input()
  IP: string;

  @Input()
  time: string;
}
