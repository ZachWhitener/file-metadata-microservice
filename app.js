/**
 * Two objectives:
 * 1. submit form data object which includes file upload
 * 2. receive the file size in bytes as a response
 *
 * */

var express = require('express'); 
var app = express(); 
var path = process.cwd();
var router = express.Router();
var multer = require('multer'); 
var upload = multer({ dest: 'uploads/' });

app.get('/', require('./routes/index'));
app.post('/upload', upload.single('file'), require('./routes/upload'));

require('dotenv').load();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(path + '/public'));





var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('Node.js listening on port: ' + port + '...');
})
 