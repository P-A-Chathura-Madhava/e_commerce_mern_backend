const express = require('express');
const { createUser, loginUserCtrl, getAllUsers, getaUser, deleteaUser, updatedUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist } = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.post('/reset-password/:token', resetPassword);
router.put('/password', authMiddleware, updatePassword);
router.post('/login', loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.get('/all-users', getAllUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.get('/:id', getaUser);
router.delete('/:id', deleteaUser);
router.put('/edit-user', authMiddleware, updatedUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
// router.get('/:id', authMiddleware, isAdmin, getAUser);

module.exports = router;