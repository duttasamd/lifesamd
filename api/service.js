var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(
	"/url", (req, res, next) => { 
		var pystring = req.query.pystring;
		pystring = decodeURI(pystring);

		var response = "";

		console.log(pystring);

		const fs = require('fs');

		fs.writeFile("./script.py", "fdfdsfsd", function(err) {
		    if(err) {
		        console.log(err);
		    }

		    console.log("Written to file.");
		});

		let {PythonShell} = require('python-shell');

		let options = {
		  mode: 'text',
		  pythonOptions: ['-u'],
		};

		PythonShell.run('script.py', options, function (err, results) {
		  	if (err) {
				res.json({"err" : err});
		  	} else {
		  		if(results != null) {
		  			response = results;
		  			if(results.length > 0) {
		  				response = results.join("\n");
		  			}		  	
					res.json({"res" : response});	
		  		} else {
					res.json({"res" : "No Result."});
		  		}		  		  		
		  	}	
		});

	}
);

app.listen(
	3002, ()=> { console.log("Server running on port 3002...") }
);

function writetotempfile(script) {
	const fs = require('fs');
	console.log("writing: " + script);
	
}