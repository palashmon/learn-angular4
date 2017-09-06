import { Pipe, PipeTransform } from '@angular/core';

/**
 * Capitalize first letter of each word in a string
 */
@Pipe({ name: 'default' })
export class DefaultPipe implements PipeTransform {
    transform(value: string, args?: any): any {
        // tslint:disable-next-line:curly
        if (value === null && args.length) {
            return args.trim();
        } else {
            return value.trim();
        }
    }
}
