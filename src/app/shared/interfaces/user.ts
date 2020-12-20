export interface User {
  id: string;
  token: string;
  name: NameModel;
  login: string;
  password: string;
}

export interface NameModel {
  firstName: string;
  lastName: string;
}

export interface LoginUser {
  login: string;
  password: string;
}
