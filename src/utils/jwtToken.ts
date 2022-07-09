import jwt from 'jsonwebtoken';

const SECRET = 'suaSenhaSecreta';
const jwtConfig: object = {
  algorithm: 'HS256',
};

const generateJWTToken = (payload: number): string => jwt.sign({ id: payload }, SECRET, jwtConfig);

export default generateJWTToken;