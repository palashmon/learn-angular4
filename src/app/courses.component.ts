import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'USD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate'}}
    `
})
export class CoursesComponent {
    course = {
        title: 'The Angular Crash Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2017, 8, 21)
    };
}
