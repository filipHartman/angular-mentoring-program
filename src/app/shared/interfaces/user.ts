export interface User {
  id: string;
  firstName: string;
  lastName: string;
  token?: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
