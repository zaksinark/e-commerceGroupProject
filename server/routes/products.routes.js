const ProductController = require('../controllers/products.controller');
const router = require('express').Router();


// Routes follow proper RESTful API naming convention, this is why my routes start with API
//HTTP request methods will determine the CRUD functionality


    router.get('/getAll', ProductController.getAll);
    router.post('/create', ProductController.create);
    router.get('/get/:id', ProductController.getOne);
    router.put('/update/:id', ProductController.update);
    router.delete('/delete/:id', ProductController.delete);

    module.exports = router;