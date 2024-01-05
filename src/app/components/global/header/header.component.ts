import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SafePipe} from "../../../../pipes/safe.pipe";
import {Icons} from "../../../../common/icons";
import {Pattern_1_center} from "../../../../directives/layout/pattern_1_center";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgOptimizedImage,
        SafePipe,
        Pattern_1_center
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    username: string = "IXliyNez"

    @Input()
    mode: "absolute" | "insert" = "absolute";


    protected readonly Icons = Icons;
}
