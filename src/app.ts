import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/Product/Product.route';
import { OrderRoute } from './app/modules/Order/Order.route';
const app: Application = express();

// Peraser
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
