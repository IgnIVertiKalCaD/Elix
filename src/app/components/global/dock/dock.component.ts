import {Component, Input} from '@angular/core';
import {Icons} from "../../../../common/icons";
import {SafePipe} from "../../../../pipes/safe.pipe";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NavButtonComponent} from "../navigation/nav-button/nav-button.component";

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [
    SafePipe,
    RouterLink,
    RouterLinkActive,
    NavButtonComponent
  ],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.scss'
})
export class DockComponent {
    @Input()
    mode: "absolute" | "insert" = "absolute"

    protected readonly Icons = Icons;
}
