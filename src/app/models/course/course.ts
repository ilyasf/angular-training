import {ICourse} from '../../interfaces/course';

export class Course implements ICourse{
  public id: string;
  public title: string;
  public description: string;
  public createdAt: string;
  public duration: number;
}
