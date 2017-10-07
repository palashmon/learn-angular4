import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    //#region Properties

    // Get username from "form" field above
    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }
    //#endregion
}
