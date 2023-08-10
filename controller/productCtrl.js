const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
//     // First method
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            title: req?.body?.title,
            description: req?.body?.description,
            price: req?.body?.price,
            quantity: req?.body?.quantity,
        },
        {
            new: true,
        });
        res.json(updatedProduct);
    } catch (error) {
        throw new Error(error);
    }
  });

const getaProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const findProduct = await Product .findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        const getallProducts = await Product.find();
        res.json(getallProducts);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteaProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const deleteaProduct = await Product.findByIdAndDelete(id);
        res.json({
            deleteaProduct,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createProduct, getaProduct, getAllProduct, updateProduct, deleteaProduct};