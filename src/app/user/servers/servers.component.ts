import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CardServerComponent} from "./components/card-server/card-server.component";
import KeenSlider, {KeenSliderInstance} from "keen-slider"
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
    selector: 'app-servers',
    standalone: true,
    imports: [
        RouterOutlet,
        CardServerComponent,
        NgClass,
        NgIf,
        NgForOf,
        NgStyle
    ],
    templateUrl: './servers.component.html',
    styleUrl: './servers.component.scss'
})
export class ServersComponent implements OnDestroy {

    servers: string[] = ["oneBlock", "Penisblockxyiglot", "xyisosiblock"]

    @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>

    slider: KeenSliderInstance;
    currentSlide: number = 0


    render() {
        setTimeout(() => {
            this.slider = new KeenSlider(this.sliderRef.nativeElement, {
                slides: {
                    perView: "auto",
                    spacing: 8,
                },
                renderMode: "performance",
                initial: this.currentSlide,
                slideChanged: (s) => {
                    this.currentSlide = s.track.details.rel
                },
            })
        }, 10)
        setTimeout(() => {
            this.slider.update()
        }, 1000)
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy()
    }
}
