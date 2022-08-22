import express from 'express';
import reviewRouter from './v1/review.js';

const apiRouter = express.Router();

apiRouter.use('/v1/review', reviewRouter);

export default apiRouter;