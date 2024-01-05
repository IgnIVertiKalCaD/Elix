import { Component } from '@angular/core';
import {ErrorComponent} from "../../components/error/error.component";
import {SafePipe} from "../../../../../pipes/safe.pipe";
import {Icons} from "../../../../../common/icons";

@Component({
  selector: 'app-maintenance',
  standalone: true,
    imports: [
        ErrorComponent,
        SafePipe
    ],
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss', '../../errors.component.scss']
})
export class MaintenanceComponent {

    protected readonly Icons = Icons;
}
