import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageContainerModule } from '@components/page-container/page-container.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LoadingInterceptor } from './shared/services/spinner/loading.interceptor';
import * as Reducer from './shared/store/app/app.reducers';
import { AuthEffects } from './shared/store/auth/auth.effects';
import { CoursesEffects } from './shared/store/courses/courses.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    PageContainerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ [Reducer.appKey]: Reducer.appReaducer }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class AppModule {}
