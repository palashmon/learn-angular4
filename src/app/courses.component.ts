import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <h2 class="subtitle">{{ title }}</h2>
        <img [src]="imageUrl" [alt]="altText" />
    `
})
export class CoursesComponent {
    title = 'List of course';

    // Here we have an static array for demo
    // courses;

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }

    imageUrl = 'http://unsplash.it/458/354';
    altText = 'A sample image';
}
