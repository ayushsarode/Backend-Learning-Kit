const PORT = 8001;
const express = require('express');
const path = require('path');
const multer = require('multer');
const { log } = require('console');

const upload = multer({ dest: 'uploads/' });
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.render('homepage');
});

app.post('/upload', upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
