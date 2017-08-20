import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <p>
            <button type="button" class="btn" [ngClass]="moreClasses">Success</button>
        </p>
    `
})
export class CoursesComponent {
    title = 'List of course';

    isActive = true;
    success = true;

    // moreClasses is a property in the component that contains an object
    moreClasses = {
        'btn-success': this.success,
        active: this.isActive
    };
}
