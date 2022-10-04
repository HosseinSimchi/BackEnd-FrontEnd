const express = require('express')
const app = express()
const ConnectDB = require('./database')
const router = require('./routes/routes')
const Tode = require('./model/model')
const bodyParser = require('body-parser');
var cors = require('cors')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = 3000;
//? Connect to Mongo DB database


ConnectDB()
// require('./axios')


app.use('/todoList', router)
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))











