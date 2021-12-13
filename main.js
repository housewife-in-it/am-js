// function palindrome (str) {
//   if (str.length === 1){
//     return true;
//   }
//   if (str.length === 2){
//     return str[0] === str [-1];
//   }
//   if (str[0] === str.slice (-1)){
//     return palindrome (str.slice (1, -1));
//   }
//   return false;
// }
//
// const str = 'madam'.toUpperCase ().replace (/\s/g, '');
// console.log (palindrome (str));

//
// function min (a, b) {
//   if (a < b){
//     return a;
//   }else{
//     return b;
//   }
// }
// console.log (min (5,2));
//
// function max (a, y) {
//   if (a > y){
//     return a;
//   }else{
//     return b;
//   }
// }
//
// console.log (max (500,42));

//
// function max (a, y) {
//   return a > y ? a : (y === a ? 'Мы равны' : y);
// }
//
// console.log (max (41, 40));


let arr = [];
for (let i = 0; arr.length < 10; i++) {
  arr[i] = (Math.round (Math.random () * 1000));
}
console.log (arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i].toString ().includes (0)){
    let word = arr[i].toString ();
    let n = word.replace ('0', 'zero');
    arr[i] = n;
  }
}
console.log (arr);
