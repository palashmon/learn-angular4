import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number): any {
        // tslint:disable-next-line:curly
        if (!value) return null;

        // Check if any limit arguments was passed
        // if null then use default 50
        const actualLimit = limit || 50;
        return value.trim().substr(0, actualLimit) + '...';
    }
}
