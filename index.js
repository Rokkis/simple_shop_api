const express = require('express');
const bodyParser = require('body-parser');

const config = require('./configs/config');
const port = config.port;
const app = express();
app.use(bodyParser.json());
require('./app/routes')(app);





const server = app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})