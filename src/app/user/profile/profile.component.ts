import { Component } from '@angular/core';
import {InputFileComponent} from "../../components/inputs/input-file/input-file.component";
import {ButtonComponent} from "../../components/button/button.component";
import {Icons} from "../../../common/icons";
import {SafePipe} from "../../../pipes/safe.pipe";
import {RegistrationComponent} from "../../auth/registration/registration.component";
import {Pattern_1_center} from "../../../directives/layout/pattern_1_center";
import {ChipsComponent} from "../../components/chips/chip-sessions/chips.component";

@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [
        InputFileComponent,
        ButtonComponent,
        SafePipe,
        RegistrationComponent,
        Pattern_1_center,
        ChipsComponent
    ],
    host: {
      'class': 'fill-height'
    },
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  protected readonly Icons = Icons;
}
