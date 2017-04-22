let express = require('express');
let favicon = require('serve-favicon');
let path = require('path');
let app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'resources/img/favicon.ico')));
app.get('/', (req, res) => {
    res.render('landing', {title: 'Le Hai Ninh'});
});
app.get('/travel', (req, res) => {
    res.render('travel', {title: 'Le Hai Ninh'});
});

console.info('App is running on port 8888');
app.listen(8888);
