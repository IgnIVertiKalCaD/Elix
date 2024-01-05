import {Component, Input} from '@angular/core';
import {Icons} from "../../../../common/icons";
import {SafePipe} from "../../../../pipes/safe.pipe";
import {NgIf} from "@angular/common";
import {CenterPosAbDirective} from "../../../../directives/icons/center-pos-ab.directive";

@Component({
    selector: 'app-input-text',
    standalone: true,
    imports: [
        SafePipe,
        NgIf,
        CenterPosAbDirective
    ],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
    @Input()
    placeholder: string;

    @Input()
    className: 'accent' | 'outline' | 'default' = 'default';

    @Input()
    type: 'email' | 'password' | 'text';


    isHide: boolean = true;

    toggleShowPassword(): void {
        this.isHide = !this.isHide
    }

    protected readonly Icons = Icons;

    selectType(): typeof this.type {
        if (this.type === 'password') {
            if (this.isHide) {
                return "password"
            }
            return "text"
        } else return this.type
    }
}
