var express = require("express");
var session = require("express-session");
var app = express();

app.use(session( {
secret: "lksdlkjslkdsfalksadadsfa",
saveUninialized: true,
resave: false
}))

var db ;

// Body Parser
var bodyParser = require("body-parser");
// app.use(session({
// 	secret: "keyboard Cat",
// 	resave: false,
// 	saveUninialized: true
// }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost", function(err, database) {
	if (err){
		console.log(err);
	}
	db = database;

	// 	// Create new user
	// db.collection('student').insert([{"firstName":"Rob","lastName":"Dipson","username":"dipdip","password":"pikachu","parents":["Barry","Derby"]},{"firstName":"Dohn","lastName":"Obiel","username":"dohn","password":"password","parents":["tree","sand"]}]);

	// // create new teacher
	// db.collection('teacher').insert([{"firstName":"Sarah","lastName":"huynh","username":"imsarah","password":"password1","picture":"","bio":"","hireDate":"","courses":""}])

	// // create new class
	// db.collection('class').insert([{"className":"math","studentId":["58b5ea085e9ce1ae5f716fa3","58b5ea1f5e9ce1ae5f716fa4"],"assignment":["ass1"],"teacherId":"58b5f04a5e9ce1ae5f716fa6"}])

	// // created new assignment
	// db.collection('assignment').insert([{"assignmentName":"ass1","students":{"58b5ea085e9ce1ae5f716fa3":70,"58b5ea1f5e9ce1ae5f716fa4":100}}])

<<<<<<< Updated upstream
	app.listen(8080, function(){
		console.log("listin on porta 8080");
	})
})


//var app = express;
//var session = require("expression-session";)
//app.use(session( {
//secret: "asdfa",
//saveUninialized: true,
//resave: false
//}))
=======
>>>>>>> Stashed changes

	app.listen(8080, function(){
		console.log("listin on porta 8080")
	})
});

///////////////////////////////////////////////////////


<<<<<<< Updated upstream
=======
req.session ==={}

app.get("/", function(req, res){
	if(req.session.isLoggedIn) {
		res.redirect("/loggedin");
	} else {
		res.redirect("/login");
	}
})

app.post("/api/login", function(req, res) {
	if(usernameAndPasswordCorrect(req.body.username, req.body.password)){
		req.session.isLoggedIn = true;
	}
})


app.get('/', function(req, res){
	db.collections('class').find({
		teacherId: //filter
	}).toArray(function(err, data){
			if (err){
				console.log(err)
			}
		})
})


>>>>>>> Stashed changes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});


//login
app.post('/login', function(req, res){
	console.log(req.body.username, " ", req.body.password, "", req.body.student)
	if (!req.body.username || !req.body.password) {
		res.send("Username or password is incorrect");
		return;
	}
	if(req.body.student == "true"){
		// Data will be user data, if its not then the wrong crudentials. if correct user, confirm login and send to correct page
		db.collection('student').findOne({username: req.body.username, password: req.body.password}, function(err, data){	
			console.log(data, "should be dohn");
			if(err){
				console.log(err)
				return;
			}
			if(data != null){
				console.log(data)
				res.send(JSON.stringify({message: "success", data:data, type:"student"}));
				return;
			}else{
				res.send({
					message: "Couldn't find user or bad password or not student"
				});
				return;
			}
			
		});
	} else {

		db.collection('teacher').findOne({username: req.body.username, password: req.body.password}, function(err, data){
			if(err){
				console.log(err)
				return;
			}
			if(data != null){
				console.log(data)
				res.send(JSON.stringify({message: "success", data:data, type:"teacher"}));
				return;
			}else{
				res.send(JSON.stringify({
					message: "Couldn't find user or bad password or not teacher"
				}));
				return;
			}
		});

	}

	
})

// app.post("/api/login", function(req, res) {
// 	// Check that the user is providing a username/password
// 	var user = getUsersByName(req.body.username);
// 	if (!req.body.username || !req.body.password) {
// 		res.send("error");
// 		return;
// 	}
// 	// Check if the username and password exist
// 	if (req.body.username === user.username &&
// 		req.body.password === user.password) {
// 			//We are logged in! Modify req.session to store that info on the user's session object for future use
// 		req.session.user = escapeHtml(req.body.username);
// 		res.send("success");
// 	} else {
// 			//We are not logged in - so send back an error!
// 		res.send("error");
// 	}
// 	//NEW IF ELSES FOR SIGNUP DOWN HERE!
// });

//get student homepage
app.get('/api/assignment', function(req, res){
	db.collection('assignment').find({"students.student": res.session._id})
	res.send(JSON.stringify())
})





