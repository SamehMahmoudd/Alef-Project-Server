const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// User Routes 

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.editUser);


// Export the router:
module.exports = router;

