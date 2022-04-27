const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

// Setting up url for respective routes
router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;