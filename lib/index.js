/**
*
*	VALIDATE: number-primitive-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an array of primitive numbers.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// IS NUMBER ARRAY //

/**
* FUNCTION: isNumberArray( value )
*	Validates if a value is an array of number primitives, excluding NaN.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of number primitives
*/
function isNumberArray( value ) {
	var len, v;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		v = value[ i ];
		if ( typeof v !== 'number' || v !== v ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isNumberArray()


// EXPORTS //

module.exports = isNumberArray;
