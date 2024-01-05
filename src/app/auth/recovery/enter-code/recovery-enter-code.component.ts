import {Component, ViewEncapsulation} from '@angular/core';
import {NgxOtpInputConfig, NgxOtpInputModule} from "ngx-otp-input";
import {ButtonComponent} from "../../../components/button/button.component";
import {InputTextComponent} from "../../../components/inputs/input-text/input-text.component";
import {InputOtpComponent} from "../../../components/inputs/input-otp/input-otp.component";
import {NavButtonComponent} from "../../../components/global/navigation/nav-button/nav-button.component";

@Component({
  selector: 'app-enter-code',
  standalone: true,
  imports: [
    NgxOtpInputModule,
    ButtonComponent,
    InputTextComponent,
    InputOtpComponent,
    NavButtonComponent
  ],
  templateUrl: './recovery-enter-code.component.html',
  styleUrl: './recovery-enter-code.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RecoveryEnterCodeComponent {

  link_registration: string = "/registration"
  link_login: string = "/login"
}
