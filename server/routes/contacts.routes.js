const ContactController = require('../controllers/contacts.controller');
const router = require('express').Router();


// Routes follow proper RESTful API naming convention, this is why my routes start with API
//HTTP request methods will determine the CRUD functionality


    router.get('/getAll', ContactController.getAll);
    router.post('/create', ContactController.create);
    router.get('/get/:id', ContactController.getOne);
    router.put('/update/:id', ContactController.update);
    router.delete('/delete/:id', ContactController.delete);
    
module.exports = router;