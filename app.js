const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/base_personas' 

mongoose.connect(url, {
    usenewurlparse: true,
    useunifiedtopology: true,
})
.then(db => console.log('db is connected'))
.cathc(err => console.error(err)) 