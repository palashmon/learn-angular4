import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { DefaultPipe } from './default.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { PanelComponent } from './panel/panel.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        CourseComponent,
        SummaryPipe,
        CapitalizePipe,
        DefaultPipe,
        FavoriteComponent,
        PanelComponent,
        InputFormatDirective,
        ContactFormComponent,
        SignupFormComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [CoursesService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
