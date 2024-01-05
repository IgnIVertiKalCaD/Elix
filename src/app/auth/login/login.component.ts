import { Component } from '@angular/core';
import {InputTextComponent} from "../../components/inputs/input-text/input-text.component";
import {CheckboxComponent} from "../../components/checkbox/checkbox.component";
import {ButtonComponent} from "../../components/button/button.component";
import {RouterLink} from "@angular/router";
import {NavButtonComponent} from "../../components/global/navigation/nav-button/nav-button.component";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        InputTextComponent,
        CheckboxComponent,
        ButtonComponent,
        RouterLink,
        NavButtonComponent
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
