const express = require('express');
const { createUser, loginUserCtrl, getAllUsers, getaUser, deleteaUser, updatedUser } = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.get('/:id', getaUser);
router.delete('/:id', deleteaUser);
router.put('/edit-user', authMiddleware, updatedUser);
// router.get('/:id', authMiddleware, isAdmin, getAUser);

module.exports = router;