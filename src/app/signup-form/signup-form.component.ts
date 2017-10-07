import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    form = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
    });
}
