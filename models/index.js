// import all required models
const User = require('./User');
const Blog = require('./Blog');
const Feedback = require('./Feedback');

// build associations

// User can post a blog. A blog can be posted and belongs to one user but can be updated by many
User.hasOne(Blog,{
    foreignKey:'user_id'
});

//Blog belongs to User
Blog.belongsTo(User,{
    foreignKey:'user_id'
});

// // Blog has many feedbacks associated with it
Blog.hasMany(Feedback,{
    foreignKey:'blog_id'
});

// // Feedback belongs to blog
Feedback.belongsTo(Blog,{
    foreignKey:'blog_id'
});

// // User can provide mutliple feedback
User.hasMany(Feedback,{
    foreignKey:'user_id'
});

// // Feedback belongs to user
Feedback.belongsTo(User,{
    foreignKey:'user_id'
});

module.exports = {User, Blog, Feedback}



