import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
    // Declare a data-bound input property
    // tslint:disable-next-line:no-input-rename
    @Input('is-favorite') isFavorite: boolean;

    constructor() {}

    ngOnInit() {}

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}
