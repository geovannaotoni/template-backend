import express, { NextFunction, Request, Response } from 'express';
import ErrorHandler from './middleware/ErrorHandler';
import router from './router';
import HttpError from './middleware/HttpError';

const app = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => res.send('ok'));
app.use(router);

app.use((err: HttpError, req: Request, res: Response, _next: NextFunction) => 
  ErrorHandler.handleError(err, req, res, _next));

export default app;