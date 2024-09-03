const express = require('express');
const { generateToken, verifyToken } = require('../controllers/tokenController');
const router = express.Router();

router.post('/generate', generateToken);
router.post('/verify', verifyToken);

module.exports = router;
