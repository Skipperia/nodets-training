import express from 'express';
import {logger} from './middlewares/logger';
import someRouter from './routes/somerouter';
import {errorHandler} from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(logger) ;
app.use('/api', someRouter) ;



app.use(errorHandler);
export default app;
