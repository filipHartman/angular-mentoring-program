import { of } from 'rxjs';
import { exampleCoursesList } from './index';

export const courseServiceMock = {
  courses$: of(exampleCoursesList),
};
