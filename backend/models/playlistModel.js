const mongoose = require("mongoose");
const Joi = require("joi");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playListSchema = new mongoose.Schema({
    title: { type: String, required: true },
    descriptions: { type: String, required: true },
    user: { type: ObjectId, ref: "User", required: true },
    songs: { type: Array, default: [] },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const validate = (playList) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        user: Joi.string().required(),
        descriptions: Joi.string().allow(""),
        songs: Joi.array().items(Joi.string()),
        image: Joi.string().allow(""),
    });
    return schema.validate(playList);
};

const PlayList = mongoose.model("PlayList", playListSchema);

module.exports = { PlayList, validate };
