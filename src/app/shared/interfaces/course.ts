export interface Course {
  id: string;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated?: boolean;
  authors?: Author;
}

export interface Author {
  id: number;
  name: string;
}
