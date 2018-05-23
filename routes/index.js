var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('index');
});

router.get('/Resume',function(req,res){
	res.render('resume');
});
router.get('/Project',function(req,res){
	res.render('project');
});

router.get('/Contect',function(req,res){
	res.render('contect');
});

router.get('/About',function(req,res){
	res.render('about');
});

router.get('/Yelpcamp',function(req,res){
	res.render('yelpcamp');
});

router.get('/B&WBLOG',function(req,res){
	res.render('bwblog');
});

module.exports = router;