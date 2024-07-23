// model for blog related feedback

const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Feedback extends Model{}

Feedback.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    blog_id:{
        type:DataTypes.INTEGER,
        references:{
            key:'id',
            model:'blog'
        },
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            key:'id',
            model:'user'
        },
    },
    sequelize,
    timestamps:true,
    freezeTableName:true,
    modelName:'feedback'
}
);