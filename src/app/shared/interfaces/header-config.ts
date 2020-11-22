import { User } from '@interfaces/user';

export interface HeaderConfig {
  isAuthenticated: boolean;
  user: User;
}
