const express = require('express');
const { createUser, loginUserCtrl, getAllUsers } = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users', getAllUsers);

module.exports = router;