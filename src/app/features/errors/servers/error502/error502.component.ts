import {Component, OnInit} from '@angular/core';
import {ErrorComponent} from "../../components/error/error.component";
import {Icons} from "../../../../../common/icons";
import {SafePipe} from "../../../../../pipes/safe.pipe";

@Component({
    selector: 'app-error502',
    standalone: true,
    imports: [
        ErrorComponent,
        SafePipe
    ],
    templateUrl: './error502.component.html',
    styleUrls: ['./error502.component.scss', '../../errors.component.scss']
})
export class Error502Component implements OnInit {

    protected readonly Icons = Icons;

    count: number = 5

    ngOnInit(): void {
        const interval = setInterval(() => {
            this.count--

            if (this.count < 0) {
              this.count = 5
              console.log('redirect')
              // clearInterval(interval)
            }
        }, 1000)
    }
}
