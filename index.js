// default and named exports

import method,{ add, sub } from './operation.js';

console.log(method());

console.log(add(2,3));
console.log(sub(2,3));


//Importing all exported members

import * as methods from './operation.js';

console.log(methods.add(2,3));
console.log(methods.sub(4,3));
console.log(methods.default());

// default module is different and other members with * alias

import operations, * as methods from './operation.js';

console.log(operations());
console.log(methods.add(2,3));
console.log(methods.sub(4,3));

 import method,{ add as ad, sub as su } from './operation.js';

 console.log(ad(2,3));
 console.log(su(3,4));

//dynamic imports
document.getElementById('button').addEventListener('click', () => {
    import('./operation.js').then(module => {
        console.log(module);
        console.log(module.add(2, 3));
    });
})