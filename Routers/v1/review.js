import express from 'express';

import reviewController from '../../controller/review.js';

import wrapper from '../../util/wrapper.js';

const reviewRouter = express.Router();

reviewRouter.post('/', wrapper.asyncWrapper(reviewController.createReviewByPcRoomId));
reviewRouter.get('/', wrapper.asyncWrapper(reviewController.getReviewsByPcRoomId));
reviewRouter.get('/:id', wrapper.asyncWrapper(reviewController.getReviewById));
reviewRouter.put('/:id', wrapper.asyncWrapper(reviewController.updateReviewById));
reviewRouter.delete('/:id', wrapper.asyncWrapper(reviewController.deleteReviewById));

export default reviewRouter;
