const { getUser } = require("../Service/auth");

function checkforAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token; 
    console.log("The token Cookie is:",tokenCookie)
    const authHeader = req.headers['authorization'];
    let token = null;
    if (tokenCookie) {
        token = tokenCookie;
    } else if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split("Bearer ")[1];
    }
    console.log("The token in Auth is:",token)
    if (token) {
        const user = getUser(token);
        console.log("The user in Auth",user)
        req.user = user;
    } else {
        req.user = null;
    }

    return next();
}

function restrictTo(roles){
    return function (req,res,next){
        if(!req.user) return res.redirect('/users/login')
        if(roles.includes(req.user.role)){
            next();
        }
        else{
            res.end("Unauthorised")
        }
    }
}


module.exports = {
    checkforAuthentication,
    restrictTo
};