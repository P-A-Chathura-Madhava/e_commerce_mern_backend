const express = require('express');
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteaProduct } = require('../controller/productCtrl');
const router = express.Router();
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getaProduct);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteaProduct);
router.get('/', getAllProduct);

module.exports = router;