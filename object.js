// object.seal

let obj = {
    firstname: "jayanth",
    add: {
        city: "mumbai"
    }
}
Object.freeze(obj);

obj.firstname = "sandy";     // {firstname: "jayanth",add: { city: "mumbai"}} 
delete obj.firstname;        // false
obj.lastname = "babu";       // {firstname: "jayanth",add: { city: "mumbai"}}
obj.add.city = "hyd";        // {firstname: "jayanth",add: { city: "hyd"}}

Object.isFrozen(obj);        // true
console.log(obj);
// {firstname: "jayanth",add: { city: "hyd"}}

let arr = [1,2,3];
Object.freeze(arr);
arr.push(4);
console.log(arr);

// Object.seal

let obj = {
    name: "jayanth"
}

Object.seal(obj);
Object.isSealed(obj);   // true
console.log(Object.isSealed(obj))
obj.name = "sandy";
obj.lastname = "desu";   // cannot add properties when it sealed
delete obj.name;   // cannot delete when sealed
console.log(obj);  // { name:"sandy" }


//Object.preventExtensions()

let obj = {
    name: "jayanth"
}
Object.preventExtensions(obj); 
Object.isExtensible(obj);   //  false
obj.name="sandy";           // allows to change properties

obj.lastname="desu";       // cannot add properties when it is not extensible
delete obj.name;           // true

console.log(obj);         // {}  




















