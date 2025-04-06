
const express = require('express');
const router = express.Router();
const apiController = require('../controller/apicontroller');
const multer = require('multer'); // ✅ YOU NEED THIS LINE

const upload = multer({ dest: 'uploads/' });


router.post('/predict', upload.single('image'), apiController.predict);
router.get('/check', apiController.check);

module.exports = router;

