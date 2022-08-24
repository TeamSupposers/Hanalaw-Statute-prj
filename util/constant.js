const constant = {
	HTTP_STATUS: Object.freeze({
		SUCCESS: 200,				// OK
		CREATED: 201,				// Created
		ACCEPTED: 202,				// Accepted
		MULTI_CHOICE: 300,			// Multiple Choice
		MOVED_PERMANENT: 301,	 	// Moved Permanently
		FOUND: 302,					// Found
		SEE_OTHER: 303,				// See Other
		NOT_MODIFY: 304,			// Not Modified
		USER_PROXY: 305,			// Use Proxy
		BAD_REQUEST: 400,			// Bad Request
		UNAUTHORIZED: 401,			// Unauthorized
		PAYMENT: 402,			 	// Payment Required
		FORBIDDEN: 403,				// Forbidden
		NOT_FOUND: 404,				// Not Found
		METHOD_NOT_ALLOWED: 405,	// Method Not Allowed
		SERVER_ERROR: 500,			// Internal Server Error
		NOT_IMPLEMENT: 501,			// Not Implemented
		BAD_GATEWAY: 502,		 	// Bad Gateway
		SERVICE_UNAVAILABLE: 503,	// Service Unavailable
		GATEWAY_TIMEOUT: 504,	 	// Gateway Timeout
	}),
	LAW_AMEND_TYPE: Object.freeze({
		ENACT: 300201,				// 제정
		PART_REVISION: 300202,		// 일부개정
		ALL_REVISION: 300203,		// 전부개정
		ABOLISH: 300204,			// 폐지
		ABOLISH_ENACT: 300205,		// 폐지제정
		BATCH_REVISION: 300206,		// 일괄개정
		BATCH_ABOLISH: 300207,		// 일괄폐지
		OTHER_LAW_REVISION: 300209, // 타법개정
		OTHER_LAW_ABOLISH: 300210,	// 타법폐지
		ETC: 300208,				// 기타
	}),
};

export default constant;
