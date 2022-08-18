import express from 'express';

import locationRouter from './v1/location.js';
import reviewRouter from './v1/review.js';

const apiRouter = express.Router();

apiRouter.use('/v1/location', locationRouter);
apiRouter.use('/v1/review', reviewRouter);

export default apiRouter;
