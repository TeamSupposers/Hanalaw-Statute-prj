import Review from '../database/mysql/models/review.js';

const createReview = async (review) => {
	const resultReview = await Review.create(review);
	return resultReview;
};

const getReviewsByPcRoomId = async (pcRoomId) => {
	const review = await Review.findAll({ where: { pcRoomId } });
	return review;
};

const getReviewById = async (id) => {
	const review = await Review.findOne({ where: { id } });
	return review;
};

const updateReview = async (id, contents) => {
	await Review.update({ contents }, { where: { id } });
	return true;
};

const deleteReview = async (id) => {
	await Review.destroy({ where: { id } });
	return true;
};

export default {
	createReview,
	getReviewsByPcRoomId,
	getReviewById,
	updateReview,
	deleteReview,
};
