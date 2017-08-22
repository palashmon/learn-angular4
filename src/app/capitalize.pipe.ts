import { Pipe, PipeTransform } from '@angular/core';

/**
 * Capitalize first letter of each word in a string
 */
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: string, args?: any): any {
        // tslint:disable-next-line:curly
        if (!value) return value;

        return value.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}
