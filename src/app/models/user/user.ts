import {IUser} from '../../interfaces/user';

export class User implements IUser{
  public id: string;
  public lastName: string;
  public firstName: string;
}
