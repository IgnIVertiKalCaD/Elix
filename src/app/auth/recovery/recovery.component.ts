import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {CheckboxComponent} from "../../components/checkbox/checkbox.component";
import {InputTextComponent} from "../../components/inputs/input-text/input-text.component";
import {RouterOutlet} from "@angular/router";
import {EnterEmailComponent} from "./enter-email/enter-email.component";
import {RecoveryEnterCodeComponent} from "./enter-code/recovery-enter-code.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

@Component({
  selector: 'app-recovery',
  standalone: true,
    imports: [
        ButtonComponent,
        CheckboxComponent,
        InputTextComponent,
        RouterOutlet,
        EnterEmailComponent,
        RecoveryEnterCodeComponent,
        ChangePasswordComponent
    ],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})
export class RecoveryComponent {

}
