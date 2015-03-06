'use strict';

var isNumberArray = require( './../lib' );

console.log( isNumberArray( [1,2,3] ) );
// returns true

console.log( isNumberArray( [ new Number( 1 ) ] ) );
// returns false

console.log( isNumberArray( [] ) );
// returns false

console.log( isNumberArray( [ NaN ] ) );
// returns false

console.log( isNumberArray( ['a','b','c'] ) );
// returns false
