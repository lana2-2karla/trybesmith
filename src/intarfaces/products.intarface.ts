interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId: null | number;
}

// 1 barra(orderId) - consulta: https://oieduardorabelo.medium.com/typescript-entendendo-a-nota%C3%A7%C3%A3o-de-tipos-9e8c1c89ef62
export default IProduct;