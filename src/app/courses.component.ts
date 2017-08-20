import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <p>
            <button type="button" class="btn" [ngClass]="getClasses()">Primary</button>
        </p>
    `
})
export class CoursesComponent {
    title = 'List of course';

    isActive = true;
    isPrimary = true;

    // moreClasses is a property in the component that contains an object
    getClasses() {
        const moreClasses = { 'btn-primary': this.isPrimary, active: this.isActive };
        return moreClasses;
    }
}
