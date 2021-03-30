// var obj = {
//     a : 1,
//     b : true,
//     c : "i don't know"
// };

// const getProperties = (x) => {
//     var a = Object.keys(x);
//     console.log(a)
// }
// getProperties(obj);


// var obj = {a:1};
// var arr = [1,2,3];

// const isPlainObject =(x)=>{
//     var a = x.constructor.name === "Object";
//     console.log(a);
// }
// isPlainObject(obj);
// isPlainObject(arr);


// var obj = { a: 1, c: 'I don’t know' };
// const modifyObject=(x)=>{
//     var a = x.constructor.name === "Object";
//     if(a == true){
//         x.isObject = true;
//         x.getPropertiesNb = Object.keys(x).length+1;
//         console.log(x);
//     }
// }
// modifyObject(obj);



// var obj = {a:'ali',
//            b:'ali'
//         };
// const makePairs=(x)=>{
//     var a = JSON.stringify(Object.entries(x));
//     console.log(a);
// }
//  makePairs(obj);


// var obj = {
//     a:'ali',
//     b:'ali'
// };

// const without =(a, b)=>{
//     delete a.b;
//     console.log(a);
// }
// without(obj, "b");



// var obj = {
//     a:'ali',
//     b:'ali'
// };
// var obj1 = {a:undefined};
// const isEmpty =(x)=>{
//     var a = Object.keys(x).length == 0;
//     console.log(a);
// }
// isEmpty(obj1);



// var obj = {
//     a:'al',
//     b:'ali'
// };
// var obj1 = {
//     a:'al',
//     b:'ali'
// };
// const isEqual =(a, b)=>{
//     var a = (JSON.stringify(a) === JSON.stringify(b));
//     console.log(a);
// }
// isEqual(obj, obj1);






// var a = { x: 0, e: 30 };
//   var b = { x: 0, d: 30 };


// const intersection=(x, y)=>{
//     var a = JSON.stringify(Object.entries(x));
//     var b = JSON.stringify(Object.entries(y));
//     let intersection1 = a.filter(x => b.includes(x));
//     console.log(intersection1);
// }
//  intersection(a,b);
