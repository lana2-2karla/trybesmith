import usersModel from '../models/users.model';
import { IUser } from '../intarfaces/users.interface';

const addUsersService = async (user: IUser): Promise<object> => {
  const newUser = await usersModel.addUsersModel(user);
  
  return newUser;
};
  
export default {
  addUsersService,
};