import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course';
import { TokenResponse } from '@interfaces/token-reponse';
import { LoginUser, User } from '@interfaces/user';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly AUTH_URL = environment.endpoints.auth;
  private readonly COURSE_URL = environment.endpoints.courses;

  constructor(private readonly http: HttpClient) {}

  authenticateUser(user: LoginUser): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.AUTH_URL.login, user);
  }

  getCurrentUser(token: TokenResponse): Observable<User> {
    return this.http.post<User>(this.AUTH_URL.userInfo, token);
  }

  getAllCourses(numberOfCourses: number = 5): Observable<Course[]> {
    const params = new HttpParams()
      .append('start', '0')
      .append('count', '' + numberOfCourses);
    return this.http
      .get<Course[]>(this.COURSE_URL, { params })
      .pipe(catchError(this.handleError), shareReplay());
  }

  getCourseById(id: string): Observable<Course> {
    return this.http
      .get<Course>(`${this.COURSE_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createCourse(course: Course): void {
    this.http
      .post(this.COURSE_URL, course)
      .pipe(catchError(this.handleError))
      .subscribe({ complete: () => console.log('dodawanie nowego kursu') });
  }

  updateCourse(course: Course): void {
    this.http
      .patch(`${this.COURSE_URL}/${course.id}`, course)
      .pipe(catchError(this.handleError))
      .subscribe({ complete: () => console.log('aktualizacja kursu') });
  }

  deleteCourse(course: Course): void {
    this.http
      .delete(`${this.COURSE_URL}/${course.id}`)
      .subscribe({ complete: () => console.log('usuwanie kursu ', course.id) });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`,
      );
    }
    return throwError('Something is wrong');
  }
}
