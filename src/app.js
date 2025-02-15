const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public/'));

// Route using EJS rendering
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' }); // Looking for views/index.ejs
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
