// model for blog related feedback

const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Feedback extends Model { }

Feedback.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'blog',
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'feedback'
    }
);

module.exports = Feedback;