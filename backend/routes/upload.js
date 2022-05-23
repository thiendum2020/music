const router = require("express").Router();
const cloudinary = require("cloudinary");
const multer = require("multer");
const fs = require("fs");
const auth = require("../middleware/auth");
const { isAuthenticated, isAdmin } = require('../middleware/auth')

//Upload audio
router.post("/audio/upload", isAuthenticated, async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ msg: "No files were uploaded!" });
        }
        const file = req.files.file;
        const fName = file.name.split(".")[0];
        if (file.size > 1024 * 1024 * 10) {
            removeTmp(file.tempFilePath);

            //If file.size > 10MB
            return res.status(400).json({ msg: "File too large!" });
        }

        const storage = multer.diskStorage({
            filename: (req, file, cb) => {
                const fileExt = file.originalname.split(".").pop();
                const filename = `${new Date().getTime()}.${fileExt}`;
                cb(null, filename);
            },
        });

        // Filter the file to validate if it meets the required audio extension
        const fileFilter = (req, file, cb) => {
            if (file.mimetype === "audio/mp3" || file.mimetype === "audio/wav" || file.mimetype === "audio/mpeg") {
                cb(null, true);
            } else {
                cb(
                    {
                        message: "Unsupported File Format",
                    },
                    false,
                );
            }
        };

        // Set the storage, file filter and file size with multer
        const upload = multer({
            storage,
            limits: {
                fieldNameSize: 200,
                fileSize: 10 * 1024 * 1024,
            },
            fileFilter,
        }).single("audio");

        upload(req, res, (err) => {
            if (err) {
                return res.send(err);
            }
            cloudinary.v2.uploader.upload(
                file.tempFilePath,
                { resource_type: "video", public_id: `audio-upload/${fName}`, folder: "tv-music" },
                async (err, result) => {
                    if (err) throw err;
                    removeTmp(file.tempFilePath);
                    res.status(200).json({
                        data: { url: result.url },
                        message: "File is uploaded",
                    });
                },
            );
        });
    } catch (error) {
        return res
            .status(500)
            .json({ msg: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
});

//Upload image
router.post("/image/upload", isAuthenticated, async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ msg: "No files were uploaded!" });
        }
        const file = req.files.file;
        const fName = file.name.split(".")[0];
        if (file.size > 1024 * 1024 * 5) {
            removeTmp(file.tempFilePath);

            //If file.size > 5MB
            return res.status(400).json({ msg: "File too large!" });
        }
        if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/jpg" && file.mimetype !== "image/png") {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "File format is incorrect!" });
        }
        cloudinary.v2.uploader.upload(
            file.tempFilePath,
            { public_id: `image-upload/${fName}`, folder: "tv-music" },
            async (err, result) => {
                if (err) throw err;
                removeTmp(file.tempFilePath);
                res.json({ data: { url: result.url }, message: "Image uploaded successfully" });
            },
        );
    } catch (error) {
        return res
            .status(500)
            .json({ msg: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
});

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};

module.exports = router;
