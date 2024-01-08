import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {ProgressBarComponent} from "../../../../components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-card-server',
  standalone: true,
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './card-server.component.html',
  styleUrl: './card-server.component.scss'
})
export class CardServerComponent implements AfterContentInit {

  @Input()
  serverName: string;

  @Output() rendered = new EventEmitter<any>();
  ngAfterContentInit() {
    setTimeout(() => {
      this.rendered.emit()
    }, 0)
  }
}
