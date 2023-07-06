const UserController = require('../controllers/users.controller');
const router = require('express').Router();


// Routes follow proper RESTful API naming convention, this is why my routes start with API
//HTTP request methods will determine the CRUD functionality


    router.get('/getAll', UserController.getAll);
    router.post('/create', UserController.create);
    router.get('/get/:id', UserController.getOne);
    router.put('/update/:id', UserController.update);
    router.delete('/delete/:id', UserController.delete);

module.exports = router;