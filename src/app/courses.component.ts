import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2 class="subtitle">{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of course';

  // Here we have an static array for demo
  courses = ['Course 1', 'Course 2', 'Course 3'];
}
