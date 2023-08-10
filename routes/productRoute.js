const express = require('express');
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteaProduct } = require('../controller/productCtrl');
const router = express.Router();
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', isAdmin, authMiddleware, createProduct);
router.get('/:id', getaProduct);
router.put('/:id', isAdmin, authMiddleware, updateProduct);
router.delete('/:id', isAdmin, authMiddleware, deleteaProduct);
router.get('/', getAllProduct);

module.exports = router;