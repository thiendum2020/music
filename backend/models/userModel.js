const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    favourites: { type: [String], default: [] },
    playlists: { type: [String], default: [] },
    isAdmin: { type: Boolean, default: false },
    following: {type: [String], default: []},
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(15).required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
    });
    return schema.validate(user);
};

const User = mongoose.model("User", userSchema);

module.exports = { User, validate };
