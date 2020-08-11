const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

// application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hellow Node Js with Express Js !!')
})

app.post('/register', (req, res) => {
    
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err)
            return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})