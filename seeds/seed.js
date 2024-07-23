require('dotenv').config({
    path:'../.env'
})

const sequelize = require('../config/connection');
const {User,Blog, Feedback} = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const feedbackData = require('./feedback.json');

const seedDatabase = async()=>{
    await sequelize.sync({force:true});

    await User.bulkCreate(userData,{
        individualHooks:true,
        returning:true,
    });

    await Blog.bulkCreate(blogData,{
        returning:true,
    });

    await Feedback.bulkCreate(feedbackData,{
        returning:true,
    });

    process.exit(0);
}

seedDatabase();