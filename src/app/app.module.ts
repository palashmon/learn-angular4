import { DefaultPipe } from './default.pipe';
import { SummaryPipe } from './summary.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

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
        ContactFormComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [CoursesService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
