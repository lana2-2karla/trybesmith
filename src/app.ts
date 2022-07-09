import express from 'express';
import 'express-async-errors';
import middlewareError from './middlewares/error';
import routerProducts from './routers/products';
import routerUsers from './routers/users';

const app = express();

app.use(express.json());

app.use(routerProducts);
app.use(routerUsers);

app.use(middlewareError);

export default app;
