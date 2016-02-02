var _ = require('underscore'); 


exports = module.exports = function(req, res) {
   var locals = res.locals; 
   
   console.log(req.file);
   locals.og = req.file.originalname;
   locals.form = false; 
   locals.size = req.file.size;
   res.render('index');
}