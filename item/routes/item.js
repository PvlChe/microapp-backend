const express = require('express');
const router = express.Router();
const itemController = require('../controller/item');

router.get('/', itemController.getItems);
router.get('/:id', itemController.getItem);
router.put('/:id', itemController.updateItem);

module.exports = router;
