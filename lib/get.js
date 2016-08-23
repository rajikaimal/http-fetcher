const https = require('https');
const http = require('http');

/*
	args[0] = hostname
	args[1] = path
	args[2] = headers
	args[last] = http or https default https
*/

function GET (...args) {
	let options = {};
	
	if (args[args.length-1] === 'http') {
		
		options = {
			hostname: args[0],
			port: 80,
			path: args[1] ? args[1] : '/',
			method: 'GET',
			headers: args[2] ? args[2]: {}
		};

		return new Promise((resolve, reject) => {
			let chunk = [];
			const req = http.request(options, (res) => {	
			  res.on('data', (data) => {
			    chunk.push(data);
			  });
			  res.on('end', () => {
			    let data = Buffer.concat(chunk);
			    resolve(JSON.parse(data.toString()));
			  });
			});
			
			req.end();

			req.on('error', (error) => {
				reject(error);
			});
		});
	}
	else if (args[args.length-1] === 'https') {
		
		options = {
			hostname: args[0],
			port: 443,
			path: args[1] ? args[1] : '/',
			method: 'GET',
			headers: args[2] ? args[2]: {}
		};

		return new Promise((resolve, reject) => {
			let chunk = [];
			const req = https.request(options, (res) => {	
			  res.on('data', (data) => {
			    chunk.push(data);
			  });
			  res.on('end', () => {
			  	let data = Buffer.concat(chunk);
			    resolve(JSON.parse(data.toString()));
			  });
			});
			
			req.end();

			req.on('error', (error) => {
				reject(error);
			});
		});
	}
}

module.exports = GET;