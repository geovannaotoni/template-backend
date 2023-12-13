import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => res.send('ok'));

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.message);
  return res.status(500).json({ message: 'Internal server error' });
});

export default app;