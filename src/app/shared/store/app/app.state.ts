import { Course } from '@interfaces/course';
import { User } from '@interfaces/user';

export interface AppState {
  user: User;
  courses: Course[];
}

export const initialState: AppState = {
  user: null,
  courses: [],
};
