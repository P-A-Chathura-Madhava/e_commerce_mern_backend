const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email: email});
    if (!findUser) {
        // Create new user 
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // User already exists
        throw new Error('User Already Exists');
    }
});

const loginUserCtrl = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    // check is user extixts or not
    const findUser = await User.findOne({email});
    if (findUser && (await findUser.isPasswordMatched(password))){
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        });
    }else {
        throw new Error('Invalid Credentials');
    }
});

// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

// Get a user
const getAUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const getAUser = await User.findById(id);
        res.json({
            getAUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createUser, loginUserCtrl, getAllUsers, getAUser};