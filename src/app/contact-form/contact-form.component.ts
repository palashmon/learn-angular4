import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    firstName: string;
    comment: string;
    submit(myForm) {
        // If the form is valid then only show the log
        if (myForm.valid) {
            console.log(myForm);
        }
    }
}
