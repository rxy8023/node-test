var color = require('../lib/color.js');
var expect = require('chai').expect;

suite('color random test' , function(){
	test('return a random', function(){
		expect(typeof color.getColor() === 'string');
	})
})