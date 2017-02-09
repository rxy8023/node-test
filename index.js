var express =require('express');
var colorss = require('./lib/color.js');

var app = express();
app.set('port', process.env.PORT || 3000);

//header engine
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars' , handlebars.engine);
app.set('view engine', 'handlebars');



app.use(express.static(__dirname + '/public'));
console.log(__dirname); 


app.use(function(req,res,next){
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === "1";
	next();
});
app.use(require('body-parser')());

app.get('/',function(req,res){
	// res.type("text/plain");
	// res.send("success")
	res.render('home');
});
//about
app.get('/about',function(req,res){
	// res.type("text/plain");
	// res.send("about page")
	res.render("about",{pageTestScript: '/qa/tests-about.js',
						color :colorss.getColor() } );
});
app.get('/block',function(req,res){
	res.render("block");
})
//请求头
app.get('/headers', function(req,res){
	res.type("test/plain");
	var s = '';
	for(var name in req.headers) s += name + ':' +req.headers[name] + '\n'
		res.send(s);
});
app.get('/newsletter',function(req,res){
	res.render("newsletter",{csrf : "csrf token"});
});
app.post('/process',function(req,res){
		console.log(req.query.form);
		console.log(req.body.csrf);
		console.log(req.body.username);
		res.redirect(303,'/thank-you')
})

//404 catch-call
app.use(function(req,res,next){
	// res.type("text/plain");
	// res.status(404);
	// res.send("404 nofound");
	res.status(404);
	res.render("404");
});

//500 catch-call
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500);
	res.render("500");
});



app.listen(app.get('port'),function(){
	console.log('New express frmp set on localhost:' + app.get('port') + ';press ctrl + c to exit');
});

