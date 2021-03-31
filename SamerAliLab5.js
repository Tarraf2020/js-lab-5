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
// var obj1 = null;
// var arr = [1,2,3];

// const isPlainObject =(x)=>{
//     var a = typeof(x)==='object' && x !== null && !Array.isArray(x);
//     console.log(a);
// }
// isPlainObject(obj);
// isPlainObject(obj1);
// isPlainObject(arr);


// var obj = { a: 1, c: 'I don’t know' };
// const modifyObject=(x)=>{
//     var a = typeof(x)==='object' && x !== null && !Array.isArray(x);
//     if(a == true){
//         x.isObject = true;
//         x.getPropertiesNb = Object.keys(x).length+1;
//         console.log(x);
//     }
// }
// modifyObject(obj);
// modifyObject([1,2]);
// modifyObject(null);



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
//     b:'shumi',
//     c:'shumi'
// };

// const without =(a1, ...b1)=>{ 
//   b1.forEach((element) =>   delete a1[element]);
//   return a1;
// };
// console.log(without(obj, "a", "b"));



// const isEmpty = (obj) => {

//   if (obj === null || Object.keys(obj).length === 0) {
//       return true;
//   }
//   else {
//       return Object.keys(obj).filter(key => {
//           if (obj[key] === false || obj[key] === null || obj[key] === undefined) {
//               return false;
//           }
//           return true;
//       }).length === 0

//   }
// }
// console.log(isEmpty({}));
// console.log(isEmpty({ a: undefined }));
// console.log(isEmpty({ a: 1 }));
// console.log(isEmpty({ a: 1, b: undefined }))



// var obj = {
//     a:'al',
//     b:'ali'
// };
// var obj1 = {
//     a:'al',
//     b:'ali1'
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
//     let intersection1 = a.filter(b => b.includes(b));
//     console.log(intersection1);
// }
//  intersection(a,b);
