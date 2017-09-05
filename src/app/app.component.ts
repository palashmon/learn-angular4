import { Component } from '@angular/core';
import { FavoriteEventArgs } from './favorite/favorite.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = ['Course 1', 'Course 2', 'Course 3'];
}
