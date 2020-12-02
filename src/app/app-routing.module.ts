import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteMap } from '@enums/site-map.enum';
import { AddCourseComponent } from './pages/add-course/add-course.page';
import { CoursesComponent } from './pages/courses/courses.page';
import { ErrorComponent } from './pages/error/error.page';
import { LoginComponent } from './pages/login/login.page';
import { AuthGuard } from './shared/services/auth/auth.guard';

const routes: Routes = [
  {
    path: SiteMap.LOGIN,
    component: LoginComponent,
  },
  {
    path: SiteMap.COURSES,
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: SiteMap.NEW_COURSE,
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: `${SiteMap.COURSES}/:id`,
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
