import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Icons} from "../../../common/icons";
import {SafePipe} from "../../../pipes/safe.pipe";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        SafePipe,
        NgIf
    ],
    standalone: true
})
export class CheckboxComponent {
    isChecked: boolean = false;

    @Output()
    eventCheck: EventEmitter<boolean> = new EventEmitter<boolean>()

    emitIsChecked(isChecked: boolean): void {
        this.isChecked = isChecked
        this.eventCheck.emit(isChecked)
    }

    protected readonly Icons = Icons;
}
