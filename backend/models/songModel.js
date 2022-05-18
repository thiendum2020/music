const mongoose = require("mongoose");
const Joi = require("joi");

const ObjectId = mongoose.Schema.Types.ObjectId;

const songSchema = new mongoose.Schema({
    name: { type: String, required: true },
    descriptions: { type: String, required: true },
    url: { type: String, required: true },
    singer: { type: ObjectId, ref: "Artist", required: true },
    composer: { type: ObjectId, ref: "Artist", required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: String, required: true },
    published: { type: Boolean, default: true },
    listens: { type: Number, required: true, default: 0 },
    createdBy: { type: ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
});

const validate = (song) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        descriptions: Joi.string().required(),
        url: Joi.string().required(),
        singer: Joi.string().required(),
        composer: Joi.string().required(),
        image: Joi.string().required(),
        duration: Joi.number().required(),
        genre: Joi.string().required()
    });
    return schema.validate(song);
};

const Song = mongoose.model("Song", songSchema);

module.exports = { Song, validate };
