import { IOrder } from '../intarfaces/orders.interface';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';

const getOrdersService = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getOrdersModel();
  const products = await productsModel.getAllProductsModel();
  return orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productsIds: products.filter((product) => order.id === product.orderId).map((item) => item.id),
  })) as IOrder[];
};

export default {
  getOrdersService,
};