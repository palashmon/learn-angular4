import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: '<h3 class="subtitle">{{ title }}</h3>'
})
export class CoursesComponent {
  title = 'List of course';
}
