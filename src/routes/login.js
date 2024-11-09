const express = require('express');
const router = express.Router();
const id = require('../controllers/id');
const pw = require('../controllers/pw');

router.post('/id', id);
router.post('/pw', pw);


module.exports = router;
