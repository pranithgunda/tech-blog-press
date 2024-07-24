const authUser = (req,res,next) => {
    // if user is not logged in, redirect the user to login page
    if(!req.session.logged_in){
        res.redirect('/login');
    }else{
        // if user is logged in, execute the next call back function in sequence
        next();
    }
};

module.exports =  authUser;