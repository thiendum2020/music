const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const { User } = require("../models/userModel");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("Login first to access this resource", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
});

//Handling users roles
exports.isAdmin = () => {
    return (req, res, next) => {
        if (!req.user.isAdmin) {
            return next(new ErrorHandler(`Role's user is not allowed to access this resource`, 403));
        }
        next();
    };
};
