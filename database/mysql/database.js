import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
	MYSQL_DATABASE,
	MYSQL_USERNAME,
	MYSQL_PASSWORD,
	MYSQL_HOST,
} = process.env;

const sequelize = new Sequelize(
	MYSQL_DATABASE,
	MYSQL_USERNAME,
	MYSQL_PASSWORD,
	{
		host: MYSQL_HOST,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 1,
			acquire: 10000,
			idle: 10000,
		},
	},
);

export default sequelize;
