import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbsModule } from '@components/breadcrumbs/breadcrumbs.module';
import { PageContainerModule } from '@components/page-container/page-container.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './pages/courses/courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    PageContainerModule,
    BreadcrumbsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
