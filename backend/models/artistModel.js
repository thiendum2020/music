const mongoose = require("mongoose");
const Joi = require("joi");

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    isSinger: { type: Boolean, required: true, default: true },
    isComposer: { type: Boolean, required: true, default: false },
    image: { type: String, required: true },
	date: { type: String, required: true },
    month: { type: String, required: true },
	year: { type: String, required: true },
    followers: {type: Number, required: true, default: 0},
    createdAt: { type: Date, default: Date.now },
});

const validate = (artist) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        gender: Joi.string().valid("male", "female").required(),
        image: Joi.string().required(),
        genre: Joi.number().required(),
		date: Joi.string().required(),
        month: Joi.string().required(),
		year: Joi.string().required(),
		followers: Joi.number().required()
    });
    return schema.validate(artist);
};

const Artist = mongoose.model("Artist", artistSchema);

module.exports = { Artist, validate };
