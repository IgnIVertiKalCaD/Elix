import { Component } from '@angular/core';
import {ButtonComponent} from "../../../components/button/button.component";
import {InputTextComponent} from "../../../components/inputs/input-text/input-text.component";
import {NavButtonComponent} from "../../../components/global/navigation/nav-button/nav-button.component";

@Component({
  selector: 'app-change-password',
  standalone: true,
    imports: [
        ButtonComponent,
        InputTextComponent,
        NavButtonComponent
    ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

    link_registration: string = "/registration"
    link_login: string = "/login"
}
