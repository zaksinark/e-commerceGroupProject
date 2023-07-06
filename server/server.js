require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extend: true }));
// require('./routes/contacts.routes')(app);
// require('./routes/orders.routes')(app);
// require('./routes/products.routes')(app);
// require('./routes/users.routes')(app);
app.use(routes);

app.listen(port, () => console.log('Express server fired up on port', port));
