import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../intarfaces/products.intarface';

const getAllProductsModel = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return rows as IProduct[];
};

const addProductsModel = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

export default {
  getAllProductsModel,
  addProductsModel,
};