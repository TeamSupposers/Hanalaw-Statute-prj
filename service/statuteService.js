import Statute from '../database/mysql/models/statute.js';
import request from 'request';
import axios from 'axios';
import cheerio from 'cheerio';

const getTestLaw = async () => {
	const testUrl = 'http://www.law.go.kr/DRF/lawSearch.do?OC=jywlsh3&target=oldAndNew&type=XML&query='+encodeURI('자동차관리법');	
	const response = await axios.get(testUrl);	
	console.log(response.data);
	// const $ = cheerio.load(response.data);
	// console.log($);
	// const response = await request(testUrl);
	return response.data;
};

// const createReview = async (review) => {
// 	const resultReview = await Review.create(review);
// 	return resultReview;
// };

// const getReviewsByPcRoomId = async (pcRoomId) => {
// 	const review = await Review.findAll({ where: { pcRoomId } });
// 	return review;
// };

// const getReviewById = async (id) => {
// 	const review = await Review.findOne({ where: { id } });
// 	return review;
// };

// const updateReview = async (id, contents) => {
// 	await Review.update({ contents }, { where: { id } });
// 	return true;
// };

// const deleteReview = async (id) => {
// 	await Review.destroy({ where: { id } });
// 	return true;
// };

export default {
	getTestLaw
	// createReview,
	// getReviewsByPcRoomId,
	// getReviewById,
	// updateReview,
	// deleteReview,
};
