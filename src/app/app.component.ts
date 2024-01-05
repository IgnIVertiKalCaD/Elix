import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {invoke} from "@tauri-apps/api/tauri";
import {AuthComponent} from "./auth/auth.component";
import {Error502Component} from "./features/errors/servers/error502/error502.component";
import {HeaderComponent} from "./components/global/header/header.component";
import { appWindow } from '@tauri-apps/api/window';
import {DockComponent} from "./components/global/dock/dock.component";
import {ProfileComponent} from "./user/profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthComponent, Error502Component, HeaderComponent, DockComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
  async ngOnInit() {
    // await appWindow.close()
  }
}
