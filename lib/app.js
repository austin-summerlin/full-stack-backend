import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import moviesController from '../lib/controllers/movies.js';

const app = express();

app.use(express.json());
app.use(moviesController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
