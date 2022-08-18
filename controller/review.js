import errors from '../models/core/errors.js';

import ReviewService from '../service/reviewService.js';

const createReviewByPcRoomId = async (req) => {
	const { pcRoomId, contents } = req.body;
	const review = { pcRoomId, contents };

	if (!pcRoomId) {
		throw new errors.InvalidInputError('pcRoomId is not exist');
	}

	if (!contents) {
		throw new errors.InvalidInputError('contents is not exist');
	}

	const resultReview = await ReviewService.createReview(review);

	return resultReview.id;
};

const getReviewsByPcRoomId = async (req) => {
	const { pcRoomId } = req.query;

	if (!pcRoomId) {
		throw new errors.InvalidInputError('pcRoomId is not exist');
	}

	const reviews = await ReviewService.getReviewsByPcRoomId(pcRoomId);
	return reviews;
};

const getReviewById = async (req) => {
	const { id } = req.params;
	const review = await ReviewService.getReviewById(id);
	return review;
};

const updateReviewById = async (req) => {
	const { id } = req.params;
	const { contents } = req.body;

	if (!contents) {
		throw new errors.InvalidInputError('contents is not exist');
	}

	const isUpdated = await ReviewService.updateReview(id, contents);

	return isUpdated;
};

const deleteReviewById = async (req) => {
	const { id } = req.params;

	const isDeleted = await ReviewService.deleteReview(id);

	return isDeleted;
};

export default {
	createReviewByPcRoomId,
	getReviewsByPcRoomId,
	getReviewById,
	updateReviewById,
	deleteReviewById,
};
