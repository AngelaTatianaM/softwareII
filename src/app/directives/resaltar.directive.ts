import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({

    selector:'[resaltar]'

})

export class ResartarDirective implements OnInit {

    constructor( private elReft: ElementRef, private render: Renderer2) {

    }

    @Input('resaltar') plan : string = '';
    ngOnInit() {

        if(this.plan === 'pagado') {
            this.render.setStyle(this.elReft.nativeElement, 'background-color', 'yellow');
            this.render.setStyle(this.elReft.nativeElement, ' font-weight', 'bold');

        }
        

    }

}