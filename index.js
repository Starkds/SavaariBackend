const express = require('express');
const placeRoute = require('./Routes/place.route.js')
const PORT = 3000;

const app = express();



app.use('/places',placeRoute);

app.listen(PORT,() =>{
    console.log(`app listened at ${PORT}`)
})