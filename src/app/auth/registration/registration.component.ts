import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    imports: [
        RouterOutlet
    ],
    styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
