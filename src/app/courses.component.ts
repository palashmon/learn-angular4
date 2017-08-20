import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <button (click)="onSave($event)" class="btn btn-primary">Save</button>
    `
})
export class CoursesComponent {
    title = 'Event Binding';
    onSave($event) {
        console.log($event);
        console.log('Button was clicked!');
    }
}
