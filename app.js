let express = require('express');
let app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.get('/', (req, res) => {
    res.render('landing', {title: 'Le Hai Ninh'});
});

console.info('App is running on port 8888');
app.listen(8888);
