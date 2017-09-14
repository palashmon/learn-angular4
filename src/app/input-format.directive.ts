import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
   selector: '[appInputFormat]'
})
export class InputFormatDirective {
   // tslint:disable-next-line:no-input-rename
   @Input('appInputFormat') format;
   constructor(private el: ElementRef) {}

   @HostListener('blur')
   onblur() {
      const value: string = this.el.nativeElement.value;

      // Check the format supplied from the html host
      if (this.format === 'lowercase') {
         this.el.nativeElement.value = value.toLowerCase();
      } else {
         this.el.nativeElement.value = value.toUpperCase();
      }
   }
}
