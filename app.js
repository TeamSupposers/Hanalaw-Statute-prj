import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routers/index.js';
import { logger } from './config/winston.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.set('view engine', 'ejs');
app.use('/', apiRouter);

app.listen(4000, () => logger.info('Server listening on port 4000'));

/* ▼ 2022-05-11 공통 에러 처리 by 정민교 ▼ */
process.on('uncaughtException', (err) => {
	logger.error('an uncaught exception detected : ', err);
	process.exit(1);
});

process.on('unhandledRejection', (err) => {
	logger.error('an unhandled rejection detected : ', err);
	process.exit(1);
});
/* ▲ 2022-05-11 공통 에러 처리 by 정민교 ▲ */

export default app;
