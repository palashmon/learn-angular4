import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <input #username (keyup.enter)="onKeyUp(username)" />
    `
})
export class CoursesComponent {
    title = 'Template Variables';
    onKeyUp(username) {
        console.log(username.value);
    }
}
