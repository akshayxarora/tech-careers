const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);


app.get('/', (req, res) => {
    res.send('We are on home');
});

mongoose.connect(process.env.DB_CONNECTION, (uri, callback)=> {
    console.log("DB connected", uri, callback);
})

app.listen(5001, ()=>{
    console.log('Listening on port 5001');
})