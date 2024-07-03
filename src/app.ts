import express from 'express';
import { logger } from './middlewares/middle';
import someRouter from './routes/somerouter';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api', someRouter);

export default app;
