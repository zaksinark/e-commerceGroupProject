const mongoose = require('mongoose');
const dbName = process.env.ATLAS_DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbUri = process.env.ATLAS_DB_CONNECTION_STRING;
const uri = `mongodb+srv://${username}:${pw}@${dbUri}/${dbName}?retryWrites=true&w=majority`;
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>
    console.log('WE HAVE FIRED UP THE DATABASE, YOU ARE READY TO MAKE REQUESTS')
    )
    .catch((err)=>
        console.log('Something went wrong when connecting to the DATABASE', err)
    );
    