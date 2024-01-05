import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-button',
    standalone: true,
    host: {
        'class': 'd-block'
    },
    encapsulation: ViewEncapsulation.None,
    templateUrl: './button.component.html',
    imports: [
        NgClass
    ],
    styleUrl: './button.component.scss'
})
export class ButtonComponent {

    @Input()
    className: 'default' | 'accent' | 'only-icon' | 'all-sessions' | 'other' = 'default';

    @Input()
    color: 'red';

}
