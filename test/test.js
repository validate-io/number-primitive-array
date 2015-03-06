/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNumberArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-number-primitive-array', function tests() {

	it( 'should export a function', function test() {
		expect( isNumberArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isNumberArray( [1,2,3] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[1, new Number(1)],
			['1','2','3'],
			[ NaN ]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isNumberArray( value );
		}
	});

});
