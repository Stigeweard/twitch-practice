const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',
    function(req, res) {
        res.render('index', {
            // user: req.user
        });
    });

app.listen(port, () => {
    console.log('server listening on', port);
})
