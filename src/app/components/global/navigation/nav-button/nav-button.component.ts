import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Icons} from "../../../../../common/icons";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SafePipe} from "../../../../../pipes/safe.pipe";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-nav-button',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        SafePipe,
        NgIf
    ],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './nav-button.component.html',
    styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {
    @Input()
    className: 'default' | 'auxiliary' = 'default';

    @Input()
    icon: string;

    @Input()
    link: string;

    @Input()
    routerLinkActive: 'active' | '' = '';

    protected readonly Icons = Icons;
}
