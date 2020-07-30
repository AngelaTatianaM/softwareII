import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : 'li[constar-clicks]'
})

export class ConstarClicksDirective {
    clickN=0;

    constructor() {

    }
    @HostBinding('style.opacity') cambiarOpacidad : number = .1;

    @HostListener('click', ['$event.target']) onClick(btn) {
        console.log('a', btn, this.clickN++);

        this.cambiarOpacidad +=.1;
    }
}