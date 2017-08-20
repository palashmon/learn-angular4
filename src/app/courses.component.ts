import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <p>
            <button [style.fontSize.px]="isImportant ? '30' : '16'">Primary</button>
        </p>
    `
})
export class CoursesComponent {
    title = 'List of course';
    isImportant = true;
}
