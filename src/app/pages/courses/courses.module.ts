import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PageContainerModule } from '@components/page-container/page-container.module';
import { SearchInputModule } from '@components/search-input/search-input.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HoursFromMinutesModule } from '@pipes/hours-from-minutes/hours-from-minutes.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses.page';

@NgModule({
  declarations: [CoursesComponent, CourseCardComponent],
  exports: [CoursesComponent],
  imports: [
    CommonModule,
    PageContainerModule,
    SearchInputModule,
    FontAwesomeModule,
    HoursFromMinutesModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule {}
