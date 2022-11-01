var express = require('express');
var app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get('/',function (req,res) {
    res.send('<h1>Hello World </h1>');
})