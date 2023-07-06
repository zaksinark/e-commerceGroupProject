const router = require('express').Router();

const contactsRoutes = require('./contacts.routes');
const ordersRoutes = require('./orders.routes');
const productsRoutes = require('./products.routes');
const usersRoutes = require('./users.routes');


router.use('/api/contacts', contactsRoutes)
router.use('/api/orders', ordersRoutes)
router.use('/api/products', productsRoutes)
router.use('/api/users', usersRoutes)

module.exports = router;