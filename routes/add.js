var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	var name = req.query.name;
	var description = req.query.description;
	res.render("index", {
		"friends": [
		{
			"name": neme,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people"			
		},
	]
});
 };
