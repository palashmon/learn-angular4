import { Component } from '@angular/core';
import { FavoriteEventArgs } from './favorite/favorite.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    post = {
        title: 'Sample Title',
        isFavorite: true
    };

    // Call a function in host component
    // once a event is emitted by main component
    onFavoriteChanged(eventArgs: FavoriteEventArgs) {
        console.log('Favorite is changed: ');
        console.log(eventArgs);
    }
}
