import Statute from '../database/mysql/models/statute.js';
import request from 'request';
import cheerio from 'cheerio';
import axios from 'axios';
import convert from 'xml-js';
import errors from '../models/core/errors.js';

const getTestLaw = async () => {
	try{
		let testUrl = 'http://www.law.go.kr/DRF/lawSearch.do?OC=jywlsh3&target=oldAndNew&type=XML';
		testUrl += '&query='+encodeURI('자동차관리법');
		const response = await axios.get(testUrl);		
		const resBody = response.data;
		const xmlToJson = JSON.parse(convert.xml2json(resBody, {compact: true, spaces: 4}));
		console.log(typeof xmlToJson);
		if(xmlToJson.OldAndNewLawSearch.oldAndNew.length > 0) {
			return xmlToJson.OldAndNewLawSearch.oldAndNew;
		} else {
			return false;
		}
		
	} catch(e) {
		throw new errors.InvalidDataError(e.message);
	}
	
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
