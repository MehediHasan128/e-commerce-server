import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/Product/Product.route';
const app : Application = express();


// Peraser
app.use(express.json());
app.use(cors());


app.use('/api/products', ProductRoutes)


app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
});


export default app;