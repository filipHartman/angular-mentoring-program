import { BreadcrumbsModule } from './../../shared/components/breadcrumbs/breadcrumbs.module';
import { HoursFromMinutesModule } from './../../shared/pipes/hours-from-minutes/hours-from-minutes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageContainerModule } from './../../shared/components/page-container/page-container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses.page';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesContainerComponent,
    CourseCardComponent,
  ],
  exports: [CoursesComponent],
  imports: [
    CommonModule,
    PageContainerModule,
    BreadcrumbsModule,
    FontAwesomeModule,
    HoursFromMinutesModule,
  ],
})
export class CoursesModule {}
