var express = require('express');
var app = express();
var authRoutes = require('./routes/index');
var mongoose = require('mongoose');

mongoose.connect('mongodb://yifanli:199322@ds133920.mlab.com:33920/personal-introduce-website');

// mongodb://<yifanli>:<lyf199322>@ds133920.mlab.com:33920/personal-introduce-website


// open view file and reduce ejs
app.set('view engine','ejs');

app.use(authRoutes);


// SCHMA SETUP

var projectSchema = new mongoose.Schema({
	name : String,
	image : String,
	description : String,
});

var projects = mongoose.model('Project',projectSchema);

// var campground;

// add css and javascript path
app.use(express.static(__dirname + '/public'));
// add listener

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});