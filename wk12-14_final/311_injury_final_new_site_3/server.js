// HTTP Portion
var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var url = require('url');

function requestHandler(req, res) {
	// var parsedUrl = url.parse(req.url);
    // console.log("The Request is: " + parsedUrl.pathname);
    
    var parsedUrl = url.parse(req.url);
    console.log("The Request is: " + parsedUrl.pathname);

    var path = parsedUrl.pathname;
    if (path == "/") {
        path = "index.html";
    }
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		// Callback function for reading
		function (err, data) {
			// if there is an error
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			// Otherwise, send the data, the contents of the file
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
  	/*
  	res.writeHead(200);
  	res.end("Life is wonderful");
  	*/
}

httpServer.listen(1000);
console.log('Server listening on port 1000');



// //////*  HTTPS SECTION *///////
// var https = require('http');
// var fs = require('fs'); // Using the filesystem module
// var url = require('url');

// // var options = {
// //     key: fs.readFileSync('my-key.pem'),
// //     cert: fs.readFileSync('my-cert.pem')
// // };

// function requestHandler(req, res) {
//     var parsedUrl = url.parse(req.url);

//     var path = parsedUrl.pathname;
//     if (path == "/") {
//         path = "index.html";
//     }

//     fs.readFile(__dirname + path,
//         // Callback function for reading
//         function (err, fileContents) {
//             // if there is an error
//             if (err) {
//                 res.writeHead(500);
//                 return res.end('Error loading ' + req.url);
//             }
//             // Otherwise, send the data, the contents of the file
//             res.writeHead(200);
//             res.end(fileContents);
//         }
//     );

//     // Send a log message to the console
//     console.log("Got a request " + req.url);
// }

// // var httpServer = https.createServer(options, handleIt);
// httpServer.listen(5011);

// console.log('Server listening on port 5011');
