import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p class="lead">{{ title }}</p>
        <p>
            <button type="button" class="btn">Basic</button>
            <button type="button" class="btn btn-default">Default</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-link">Link</button>
        </p>
    `
})
export class CoursesComponent {
    title = 'List of course';
    dtsst = ['hey', 'ola'];

    // Here we have an static array for demo
    // courses;

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }
}
