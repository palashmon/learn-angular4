import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFormat]'
})
export class InputFormatDirective {
    @Input('appInputFormat') format;
    constructor(private el: ElementRef) {}

    @HostListener('blur')
    onblur() {
        let value: string = this.el.nativeElement.value;

        // Check the format supplied from the html host
        if (this.format === 'lowercase') {
            this.el.nativeElement.value = value.toLowerCase();
        } else {
            this.el.nativeElement.value = value.toUpperCase();
        }
    }
}
