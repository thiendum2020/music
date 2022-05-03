const { User, validate } = require("../models/userModel");
// const bcrypt = require("bcrypt");

// Get all users        GET/api/users
exports.getAllUsers = async (req, res) => {
    const users = await User.find().select("-password -__v");
    res.status(200).send({
        data: users,
        message: "Get all users successfully",
    });
};

// Get user by id       GET/api/users/:id
exports.getUserByID = async (req, res) => {
    const user = await User.findById(req.params.id).select("-password -__v");
    if (!user) return res.status(404).send({ message: "User not found" });

    res.status(200).send({
        data: user,
        message: "Get user by id successfully",
    });
};

// Update user by id        PUT/api/users/:id
exports.updateUserByID = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).select(
        "-password -__v",
    );
    res.status(200).send({
        data: user,
        message: "User profile updated successfully",
    });
};

// Delete user by id        DELETE/api/users/:id
exports.deleteUserByID = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "User deleted successfully" });
};
