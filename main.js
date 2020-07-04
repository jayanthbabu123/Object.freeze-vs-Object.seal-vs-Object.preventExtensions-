
// default exports

// import operations from './operation.js';
// console.log(operations());

// named exports
// import { add, sub } from './operation.js';
// console.log(add(2, 3));
// console.log(sub(2, 3));

//Importing all exported members
// import * as methods from './operation.js';

// console.log(methods.add(2, 3));
// console.log(methods.sub(2, 3));
// console.log(methods.default());


// default module is different and other members with * alias

// import operations, * as methods from './operation.js';

// console.log(methods.add(2, 3));
// console.log(methods.sub(2, 3));
// console.log(operations());

// import named exports with aliases;

// import {add as ad, sub as su} from './operation.js';

// console.log(ad(2,3));

//dynamic imports
// import('./operation.js').then(module=>{
//     console.log(module.add(2,3))
// })



