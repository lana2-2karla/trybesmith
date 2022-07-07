import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// createPool faz a conexão com o banco de dados (faz requisição para o BD)
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}); 

export default connection;