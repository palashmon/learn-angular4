import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <p>{{ username }}</p>
        <input [(ngModel)]="username" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    username = 'wes';

    onKeyUp(username) {
        console.log(this.username);
    }
}
