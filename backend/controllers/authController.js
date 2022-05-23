const { User, validate } = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/jwtToken");

//Login   POST/api/login
exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: "Invalid email or password!" });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send({ message: "Invalid email or password!" });

    // const token = user.generateAuthToken();
    sendToken(user, 200, res);
    // res.status(200).send({ data: token, message: "Logging in please wait..." });
};

//Register   POST/api/register
exports.register = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(403).send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = await new User({
        ...req.body,
        password: hashPassword,
    }).save();

    newUser.password = undefined;
    newUser.__v = undefined;
    res.status(200).send({ data: newUser, message: "Account created successfully" });
};

//Logout   GET/api/logout
exports.logout = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).send({ message: "Logged out successfully" });
};
