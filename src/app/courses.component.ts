import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    title = 'Event Filtering';
    onKeyUp() {
        console.log('Enter was pressed!');
    }
}
