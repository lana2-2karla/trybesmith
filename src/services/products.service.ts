import IProduct from '../intarfaces/products.intarface';
import productsModel from '../models/products.model';

const getAllProductsService = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProductsModel();
  return products;
};

const addProductsService = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await productsModel.addProductsModel(product);
  return newProduct;
};

export default {
  getAllProductsService,
  addProductsService,
};