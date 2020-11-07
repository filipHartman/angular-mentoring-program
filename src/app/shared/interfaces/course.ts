export interface Course {
  id: string;
  title: string;
  creationTime: Date;
  duration: number;
  description: string;
  topRated?: boolean;
}
