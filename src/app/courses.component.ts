import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <p>
            <button [ngStyle]="moreStyles">Primary</button>
        </p>
    `
})
export class CoursesComponent {
    title = 'List of course';
    isImportant = true;

    // moreStyles is a property in the component that contains an object with css property names as the keys
    moreStyles = {
        'background-color': '#369',
        'font-size': this.isImportant ? '25px' : '16px',
        color: 'white'
    };
}
