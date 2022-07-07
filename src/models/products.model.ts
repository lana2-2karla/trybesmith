import connection from './connection';
import IProduct from '../intarfaces/products.intarface';

const getAllProductsModel = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return rows as IProduct[];
};

export default {
  getAllProductsModel,
};