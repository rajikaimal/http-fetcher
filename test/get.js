const mocha = require('mocha');
const expect = require('chai').expect;
const get = require('../index');

describe('test GET API', function() {
	it('should return an object', function(done) {
		get('api.github.com', '/users/addyosmani/orgs', { 'User-Agent': 'github-organizations' }, 'https').then((res) => {
			expect(res[0]).to.have.property('login');
			done();
		});
	});
});