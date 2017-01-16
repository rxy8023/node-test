var express =require('express');

var app = express();
app.set('port', process.env.PORT || 3000);

//header engine
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars' , handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	// res.type("text/plain");
	// res.send("success")
	res.render('home')
})
//about
app.get('/about',function(req,res){
	// res.type("text/plain");
	// res.send("about page")
	res.render("about");
})

//404 catch-call
app.use(function(req,res){
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
})


app.listen(app.get('port'),function(){
	console.log('New express frmp set on localgost:' + app.get('port') + ';press ctrl + c to exit')
})

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];