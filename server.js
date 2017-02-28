var express = require("express");
var app = express();

var db ;

// Body Parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'))

var MongoClient = require("mongodb").MongoClient

MongoClient.connect("mongodb://localhost", function(err, database) {
	if (err){
		console.log(err)
	}
	db = database

	//Create new user
	// db.collection('student').insert([{"firstName":"Rob","lastName":"Dipson","username":"dipdip","password":"pikachu","parents":["Barry","Derby"]},{"firstName":"Dohn","lastName":"Obiel","username":"dohn","password":"password","parents":["tree","sand"]}]);

	//create new teacher
	// db.collection('teacher').insert([{"firstName":"Sarah","lastName":"huynh","userName":"imsarah","password":"password1","picture":"","bio":"","hireDate":"","courses":""}])

	// create new class
	// db.collection('class').insert([{"className":"math","studentId":["58b5ea085e9ce1ae5f716fa3","58b5ea1f5e9ce1ae5f716fa4"],"assignment":["ass1"],"teacherId":"58b5f04a5e9ce1ae5f716fa6"}])

	// created new assignment
	// db.collection('assignment').insert([{"assignmentName":"ass1","students":{"58b5ea085e9ce1ae5f716fa3":70,"58b5ea1f5e9ce1ae5f716fa4":100}}])



	app.listen(8080, function(){
		console.log("listin on porta 8080")
	})
})

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});


//login
app.post('/login', function(req, res){
	if (!req.body.username || !req.body.password) {
		res.send("Username or password is incorrect");
		return;
	}

	if(req.body.student){
		// Data will be user data, if its not then the wrong crudentials. if correct user, confirm login and send to correct page
		db.collection('student').findOne({username: req.body.username, password: req.body.password}, function(err, data){
			res.send(JSON.stringify(data))
		})
	} db.collection('teacher').findOne({username: req.body.username, password: req.body.password}, function(err, data){
			res.send(JSON.stringify(data))
		})

	}
})





