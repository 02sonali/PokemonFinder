import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[cardHighlight]'
})

export class CardHighlightDirective {
    constructor(private el: ElementRef) { }
   
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('5px 5px 5px red');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight("none");
    }
    
    private highlight(value: string) {
        this.el.nativeElement.style.boxShadow = value;
    }
}