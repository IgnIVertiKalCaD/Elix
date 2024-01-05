import { Component } from '@angular/core';
import {ButtonComponent} from "../../../components/button/button.component";
import {InputTextComponent} from "../../../components/inputs/input-text/input-text.component";
import {NavButtonComponent} from "../../../components/global/navigation/nav-button/nav-button.component";

@Component({
  selector: 'app-enter-email',
  standalone: true,
  imports: [
    ButtonComponent,
    InputTextComponent,
    NavButtonComponent
  ],
  templateUrl: './enter-email.component.html',
  styleUrl: './enter-email.component.scss'
})
export class EnterEmailComponent {

  link_registration: string = "/registration"
  link_login: string = "/login"
}
