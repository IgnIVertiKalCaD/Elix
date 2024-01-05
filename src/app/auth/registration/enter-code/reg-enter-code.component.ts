import { Component } from '@angular/core';
import {ButtonComponent} from "../../../components/button/button.component";
import {InputOtpComponent} from "../../../components/inputs/input-otp/input-otp.component";

@Component({
  selector: 'app-enter-code',
  standalone: true,
    imports: [
        ButtonComponent,
        InputOtpComponent
    ],
  templateUrl: './reg-enter-code.component.html',
  styleUrl: './reg-enter-code.component.scss'
})
export class RegEnterCodeComponent {
    email: string = 'iloveigni@gmail.com'
}
