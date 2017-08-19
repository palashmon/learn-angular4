import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <h2 class="subtitle">{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses; let i=index">
                {{i + 1}} - {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'List of course';

    // Here we have an static array for demo
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
