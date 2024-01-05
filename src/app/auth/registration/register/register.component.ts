import { Component } from '@angular/core';
import {ButtonComponent} from "../../../components/button/button.component";
import {CheckboxComponent} from "../../../components/checkbox/checkbox.component";
import {InputTextComponent} from "../../../components/inputs/input-text/input-text.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        ButtonComponent,
        CheckboxComponent,
        InputTextComponent,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
