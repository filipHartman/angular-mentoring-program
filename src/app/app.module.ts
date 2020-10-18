import { CoursesModule } from './pages/courses/courses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
