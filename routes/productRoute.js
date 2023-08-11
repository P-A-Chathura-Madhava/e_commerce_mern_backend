const express = require('express');
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteaProduct, addToWishlist } = require('../controller/productCtrl');
const router = express.Router();
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getaProduct);
router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteaProduct);
router.get('/', getAllProduct);

module.exports = router;