import errors from '../models/core/errors.js';
import StatuteService from '../service/statuteService.js';

const getTestLaw = async (req) => {	
	const resultStatute = await StatuteService.getTestLaw();

	return resultStatute;
}

// const createReviewByPcRoomId = async (req) => {
// 	const { pcRoomId, contents } = req.body;
// 	const review = { pcRoomId, contents };

// 	if (!pcRoomId) {
// 		throw new errors.InvalidInputError('pcRoomId is not exist');
// 	}

// 	if (!contents) {
// 		throw new errors.InvalidInputError('contents is not exist');
// 	}

// 	const resultReview = await StatuteService.createReview(review);

// 	return resultReview.id;
// };

// const getReviewsByPcRoomId = async (req) => {
// 	const { pcRoomId } = req.query;

// 	if (!pcRoomId) {
// 		throw new errors.InvalidInputError('pcRoomId is not exist');
// 	}

// 	const reviews = await StatuteService.getReviewsByPcRoomId(pcRoomId);
// 	return reviews;
// };

// const getReviewById = async (req) => {
// 	const { id } = req.params;
// 	const review = await StatuteService.getReviewById(id);
// 	return review;
// };

// const updateReviewById = async (req) => {
// 	const { id } = req.params;
// 	const { contents } = req.body;

// 	if (!contents) {
// 		throw new errors.InvalidInputError('contents is not exist');
// 	}

// 	const isUpdated = await StatuteService.updateReview(id, contents);

// 	return isUpdated;
// };

// const deleteReviewById = async (req) => {
// 	const { id } = req.params;

// 	const isDeleted = await StatuteService.deleteReview(id);

// 	return isDeleted;
// };

export default {
	getTestLaw
	// createReviewByPcRoomId,
	// getReviewsByPcRoomId,
	// getReviewById,
	// updateReviewById,
	// deleteReviewById,
};
