import { Component } from '@angular/core';

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
    onFavoriteChanged() {
        console.log('Favorite is changed on ' + Date.now());
    }
}
