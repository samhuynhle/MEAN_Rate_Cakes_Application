const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
require('./server/config/routes.js')(app);

app.listen(5000, () => {
    console.log('Express/Node Servier is active: Lisenting on port 5000')
})