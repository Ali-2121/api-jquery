//Aquí va la configuración del servidor, aquí tenemos morgan y la instancia a express
import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import productsRouter from './routes/products.routes.js';
config();
const app = express();
//Settings
app.set('view engine', 'ejs');
//Middlewares
app.use(express.json());
//actúa como middleware al procesar los datos enviados desde el cliente al servidor a través de formularios HTML o solicitudes POST.
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(productsRouter);
export default app;