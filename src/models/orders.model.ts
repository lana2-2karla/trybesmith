import connection from './connection';
import { IOrder } from '../intarfaces/orders.interface';

const getOrdersModel = async (): Promise<IOrder[]> => {
  const [OrdersRows] = await connection.execute(
    'SELECT * FROM Trybesmith.Orders',
  );
  return OrdersRows as IOrder[];
};

getOrdersModel();

export default {
  getOrdersModel,
};