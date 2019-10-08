const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');

router.get('/:id', orderController.getOrder);
router.post('/', orderController.saveOrder);

module.exports = router;
