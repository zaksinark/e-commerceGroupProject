const OrderController = require('../controllers/orders.controller');
const router = require('express').Router();


// Routes follow proper RESTful API naming convention, this is why my routes start with API
//HTTP request methods will determine the CRUD functionality


    router.get('/getAll', OrderController.getAll);
    router.post('/create', OrderController.create);
    router.get('/get/:id', OrderController.getOne);
    router.put('/update/:id', OrderController.update);
    router.delete('/delete/:id', OrderController.delete);

    module.exports = router;