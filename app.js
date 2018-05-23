var express = require('express');
var app = express();
var authRoutes = require('./routes/index');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/personal-website');




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

var campground
// add css and javascript path
app.use(express.static(__dirname + '/public'));
// add listener
app.listen(4000,function(){
    console.log('personal-page has started!');
});