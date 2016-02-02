var path = process.cwd(); 
var routes = {}; 
var middleware = require('./middleware');
 

middleware.initLocals; 

exports = module.exports = function(req, res) {
    
    console.log('in the right place');
    res.render('index', {
        appTitle: 'File Metadata Microservice',
        form: true
    });
    
    
    
}