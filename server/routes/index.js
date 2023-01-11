const route = require('express').Router();
const adminRoutes = require('./admin');
const itemRoutes = require('./item');
const brandRoutes = require('./brand');

route.get('/api', (req, res) => {
    res.status(200).json({
        message: "Dashboard Unni-Cell"
    })
});

route.use('/api/admins', adminRoutes);
route.use('/api/items', itemRoutes);
route.use('/api/brands', brandRoutes);




module.exports = route