import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-input-file',
    standalone: true,
    imports: [],
    templateUrl: './input-file.component.html',
    styleUrl: './input-file.component.scss'
})
export class InputFileComponent implements OnInit {
    @ViewChild('file') file: ElementRef;

    @Input()
    text: string;

    @Input()
    className: 'default' = "default"

    // @Output()
    // fileData = new EventEmitter<void>();
    ngOnInit(): void {
    }
}
