const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(__dirname))

app.listen(8081, () => console.log('the server cdn is running on 8081'))
