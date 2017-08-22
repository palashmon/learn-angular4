import { SummaryPipe } from './summary.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [AppComponent, CoursesComponent, CourseComponent, SummaryPipe, CapitalizePipe],
    imports: [BrowserModule, FormsModule],
    providers: [CoursesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
