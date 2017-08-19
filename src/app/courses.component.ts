import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <h2 class="subtitle">{{ title }}</h2>
        <table>
            <tr>
                <td [attr.colspan]="colSpan">Hello World!</td>
            </tr>
        </table>
    `
})
export class CoursesComponent {
    title = 'List of course';

    // Here we have an static array for demo
    // courses;

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }

    colSpan = 2;
}
