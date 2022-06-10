var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.get('/login',function(req,res){
	res.send('Login please');
})
app.listen(3000,function(){
	console.log('Connected 3000 port!');
});
