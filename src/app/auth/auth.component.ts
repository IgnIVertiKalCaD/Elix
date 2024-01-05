import {Component, ViewEncapsulation} from '@angular/core';
import {Icons} from "../../common/icons";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../components/global/header/header.component";
import {DockComponent} from "../components/global/dock/dock.component";
@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        DockComponent,
    ],
    host: {
        'class' : 'layout-center'
    },
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    encapsulation: ViewEncapsulation.None,
})

export class AuthComponent {

    protected readonly Icons = Icons;
}
