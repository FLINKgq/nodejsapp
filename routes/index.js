const express = require('express');
const router = express.Router();

const registrationRoutes = require('./registration');
const loginRoutes = require('./login');
const homeRoutes = require('./home');

router.use('/registration', registrationRoutes);
router.use('/login', loginRoutes);
router.use('/', homeRoutes);

module.exports = router;