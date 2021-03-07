var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const api = require('./apiConfig');
const cors = require('cors');


const app = express()

app.use(express.static('dist'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})
app.listen(8080, function () {
    console.log('Anas Khafaga\'s app listening on port 8080!')
})
app.post('/test', function (req, res) {
    api(req.body.name).then(data => {
        res.json(data);
    })
})
