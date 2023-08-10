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

// Update a user
// const updatedUser = asyncHandler(async (req, res) => {
//     const {id} = req.params;
//     // First method
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, {
//             firstname: req?.body?.firstname,
//             lastname: req?.body?.lastname,
//             email: req?.body?.email,
//             mobile: req?.body?.mobile,
//         },
//         {
//             new: true,
//         });
//         res.json(updatedUser);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// Second method
const updatedUser = asyncHandler(async (req, res) => {
    console.log(req.user);
    const {_id} = req.user;
    // First method
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
        {
            new: true,
        });
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
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
const getaUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Delete a user
const deleteaUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const blockUser = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const block = await User.findByIdAndUpdate(id, {
            isBlocked: true,
        },
        {
            new:true,
        });
        res.json({
            message: 'User blocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});


const unblockUser = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const unblock = await User.findByIdAndUpdate(id, {
            isBlocked: false,
        },
        {
            new:true,
        });
        res.json({
            message: 'User unblocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {createUser, loginUserCtrl, getAllUsers, getaUser, deleteaUser, updatedUser, blockUser, unblockUser};