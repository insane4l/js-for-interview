// Data types

console.log(typeof (typeof 2)); // 'string'
console.log(typeof null); // 'object'
console.log(Number.isNull(null));

console.log(typeof []); // 'object'
console.log(Array.isArray({})); // true

console.log(typeof (() => {})); // 'function'

console.log(typeof Infinity); // 'number'
console.log(typeof NaN); // 'number'
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true




