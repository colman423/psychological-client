var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    console.log(new Date().toUTCString(), req.path||"")
    // console.log(req.route)
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen( process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`)
});
