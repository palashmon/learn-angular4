import { Component } from '@angular/core';
import { FavoriteEventArgs } from './favorite/favorite.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
        { id: 3, name: 'Course 3' }
    ];

    onAdd() {
        this.courses.push({ id: 4, name: 'Course 4' });
    }
    onRemove(course) {
        const index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    onChange(course) {
        course.name = 'Updated';
    }
}
