const PATH = 'http://localhost:3004';

export const baseEnvironment = {
  endpoints: {
    auth: {
      login: `${PATH}/auth/login`,
      userInfo: `${PATH}/auth/userInfo`,
    },
    authors: `${PATH}/authors`,
    courses: `${PATH}/courses`,
  },
};
