import express from 'express';
import statuteRouter from './v1/statute.js';

const apiRouter = express.Router();

apiRouter.use('/api/v1/statute', statuteRouter);

export default apiRouter;