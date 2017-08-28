import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
    // Declare a data-bound input property
    // tslint:disable-next-line:no-input-rename
    @Input('is-favorite') isFavorite: boolean;
    // tslint:disable-next-line:no-output-rename
    @Output('on-change') change = new EventEmitter();

    constructor() {}
    ngOnInit() {}

    onClick() {
        this.isFavorite = !this.isFavorite;

        // Use emit() method that pushes the event up to the parent component
        // Pass current state of isFavorite variable
        this.change.emit({
            newValue: this.isFavorite,
            status: this.isFavorite ? 'liked' : 'disliked'
        });
    }
}

// Create a new interface for the favorite event arguments
export interface FavoriteEventArgs {
    newValue: boolean;
    status: string;
}
