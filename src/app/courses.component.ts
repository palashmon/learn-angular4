import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <p>
            <button type="button" class="btn btn-primary" [class.active]="isActive">Primary</button>
        </p>
    `
})
export class CoursesComponent {
    title = 'List of course';
    isActive = true;
}
