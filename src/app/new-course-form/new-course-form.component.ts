import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'new-course-form',
    templateUrl: './new-course-form.component.html',
    styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
    form = new FormGroup({
        topics: new FormArray([])
    });

    addTopic(topic: HTMLInputElement) {
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    removeTopic(topic: FormControl) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }

    // Getter to get topics as property
    get topics() {
        return (this.form.get('topics') as FormArray);
    }
}
