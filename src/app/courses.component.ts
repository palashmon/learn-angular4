import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <input (keyup)="onKeyUp($event)" />
    `
})
export class CoursesComponent {
    title = 'Event Filtering';
    onKeyUp($event) {
        if ($event.keyCode === 13) {
            console.log('Enter was pressed!');
        }
    }
}
