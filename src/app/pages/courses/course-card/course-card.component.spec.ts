import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Course } from '@interfaces/course';
import { HoursFromMinutesModule } from '@pipes/hours-from-minutes/hours-from-minutes.module';
import { render, RenderResult } from '@testing-library/angular';
import { exampleCourse } from './../../../shared/testUtils/index';
import { CourseCardComponent } from './course-card.component';

@Component({
  selector: 'app-test-host',
  template: `
    <app-course-card [course]="course" (delete)="onDelete()"></app-course-card>
  `,
})
export class TestHostComponent {
  course: Course = exampleCourse;
  onDelete(): void {}
}
describe('CourseCardComponent', () => {
  let component: RenderResult<TestHostComponent, TestHostComponent>;

  beforeEach(async () => {
    component = await render(TestHostComponent, {
      imports: [HoursFromMinutesModule, FontAwesomeModule],
      declarations: [TestHostComponent, CourseCardComponent],
    });
  });

  it('should show the title of the course', () => {
    const { getByText } = component;
    expect(getByText(exampleCourse.title)).toBeTruthy();
  });

  it('should show the description of the course', () => {
    const { getByText } = component;
    expect(getByText(exampleCourse.description)).toBeTruthy();
  });

  it('should call onDelete method after clicking delete button', () => {
    const { getByText, click } = component;
    spyOn(component.fixture.componentInstance, 'onDelete');
    click(getByText('Delete'));
    expect(component.fixture.componentInstance.onDelete).toHaveBeenCalled();
  });
});
