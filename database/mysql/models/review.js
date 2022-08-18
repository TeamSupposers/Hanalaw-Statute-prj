import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const review = sequelize.define('review', {
	// Model attributes are defined here
	id: {
		type: DataTypes.INTEGER(11).UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	pcRoomId: {
		type: DataTypes.INTEGER(11).UNSIGNED,
		allowNull: false,
	},
	contents: {
		type: DataTypes.STRING(255),
		allowNull: true,
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: sequelize.fn('now'),
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: sequelize.fn('now'),
	},
}, {
	indexes: [
		{
			name: 'idx_pc_rooms_id',
			fields: ['pcRoomId'],
		},
	],
});

// sequelize.sync().then().catch(e => console.log(e));

export default review;
