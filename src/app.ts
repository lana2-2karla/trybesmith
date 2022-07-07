import express from 'express';
import routerProducts from './routers/products';

const app = express();

app.use(express.json());

app.use(routerProducts);

export default app;
