import { CoursesService } from '@services/courses/courses.service';
import { render, RenderResult } from '@testing-library/angular';
import { of } from 'rxjs';
import { exampleCourse } from './../../shared/testUtils/index';
import { CoursesModule } from './courses.module';
import { CoursesComponent } from './courses.page';

const mockCoursesService = {
  courses$: of([exampleCourse]),
};
describe('CoursesComponent', () => {
  let component: RenderResult<CoursesComponent, CoursesComponent>;
  let instance: CoursesComponent;
  beforeEach(async () => {
    component = await render(CoursesComponent, {
      imports: [CoursesModule],
      providers: [
        {
          provide: CoursesService,
          useValue: mockCoursesService,
        },
      ],
    });

    instance = component.fixture.componentInstance;
  });

  it('should show title of the provided course', () => {
    const { getByText } = component;
    expect(getByText(exampleCourse.title)).toBeTruthy();
  });

  it('should call the delete method from courses after clicking delete button of the course', () => {
    const { getByText, click } = component;
    spyOn(instance, 'onCardDelete');
    click(getByText('Delete'));
    expect(instance.onCardDelete).toHaveBeenCalledWith(exampleCourse);
  });

  it('should call onLoadMore after clicking the button with label "Load more"', () => {
    const { getByText, click } = component;
    spyOn(instance, 'onLoadMore');
    click(getByText('Load more'));
    expect(instance.onLoadMore).toHaveBeenCalled();
  });

  it('should call onAddItem after clicking the button with label "Add course"', () => {
    const { getByText, click } = component;
    spyOn(instance, 'onAddItem');
    click(getByText('Add course'));
    expect(instance.onAddItem).toHaveBeenCalled();
  });
});
