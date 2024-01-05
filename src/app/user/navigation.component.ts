import { Component } from '@angular/core';
import {HeaderComponent} from "../components/global/header/header.component";
import {RouterOutlet} from "@angular/router";
import {DockComponent} from "../components/global/dock/dock.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        DockComponent
    ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
