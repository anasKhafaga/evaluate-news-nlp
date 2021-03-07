var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const mockAPIResponse = require('./mockAPI.js')
const api = require('./apiConfig');


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Anas Khafaga\'s app listening on port 8080!')
})

app.get('/test', function (req, res) {
    api('anaskhafaga').then(data => {
        res.json(data)
    })
})
