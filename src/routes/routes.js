const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// ! mudar as routes para res.json([])
// ! para interfaciar com o app em react

router.get('/*', (req, res) =>
	res.sendFile(path.join(__dirname, '../../dist/index.html'))
);
router.post(
	'/register',
	userController.validateRegister,
	userController.register,
	authController.login
);

router.post('/login', authController.login);
module.exports = router;
