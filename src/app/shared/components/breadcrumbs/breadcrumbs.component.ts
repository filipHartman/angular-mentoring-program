import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { CoursesService } from '@services/courses/courses.service';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { SiteMap } from './../../enums/site-map.enum';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  items$: Observable<string[]>;
  constructor(
    private readonly router: Router,
    private readonly courses: CoursesService,
  ) {}

  ngOnInit(): void {
    this.items$ = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      switchMap((event) => {
        const id: string =
          this.router.getCurrentNavigation().extras.state?.id || '';
        const items = event.url.split('/').slice(1);
        if (!!id) {
          return this.courses
            .getItemById(id)
            .pipe(map((course) => [items[0], course.name]));
        }
        return of(items);
      }),
    );
  }

  onClick(): void {
    this.router.navigateByUrl(SiteMap.COURSES);
  }
}
