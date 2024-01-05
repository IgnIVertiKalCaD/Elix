import {Component, ViewEncapsulation} from '@angular/core';
import {NgxOtpInputConfig, NgxOtpInputModule} from "ngx-otp-input";

@Component({
  selector: 'app-input-otp',
  standalone: true,
    imports: [
        NgxOtpInputModule
    ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input-otp.component.html',
  styleUrl: './input-otp.component.scss'
})
export class InputOtpComponent {
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,

    autofocus: true,
    classList: {
      inputBox: 'inputs-box',
      input: 'input',
      inputFilled: 'inputs-filled-class',
      inputDisabled: 'inputs-disable-class',
      inputSuccess: 'inputs-success-class',
      inputError: 'inputs-error-class',
    },
  };
  // handeOtpChange(value: string[]): void {
  //   console.log(value);
  // }
  handleFillEvent(value: string): void {
    console.log(value);
  }
}
