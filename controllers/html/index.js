const router = require('express').Router();

const homeRoutes = require('./homepageRoutes');
const dashRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);


module.exports = router;
