const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

//CONTROLLERS
const controller = require('./controller');

//MIDDLEWARE

const app = express();
//TOP-LEVEL MIDDLEWARE
app.use(bodyParser.json());

//ENDPOINTS
app.get('/api/houses', controller.getAll);
app.post('/api/houses', controller.addHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

const port = 4000;
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err));
app.listen(port, () => console.log(`Server running on port: ${port}`))