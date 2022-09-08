const express = require ('express');

const app = express();

app.use(() => {
    console.log('Hello Server');
    console.log('hello kedua');
    console.log('hello ketiga');
    console.log('hello keempat')
})

app.listen(4000)