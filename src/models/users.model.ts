import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../intarfaces/users.interface';
import generateJWTToken from '../utils/jwtToken';

const addUsersModel = async (user: IUser): Promise<object> => {
  const { username, classe, level, password } = user;
  
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  const token = await generateJWTToken(insertId);
  return { token };
};

export default {
  addUsersModel,
};