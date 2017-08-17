import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: '<h3 class="subtitle">{{ getTitle() }}</h3>'
})
export class CoursesComponent {
  title = 'List of course';

  getTitle() {
    return `Here the title is: ${this.title}`;
  }
}
