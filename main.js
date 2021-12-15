
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

// function isPalindrom (word) {
//   let reverseWord=word.toLowerCase().split("").reverse().join("");
//   if (word === reverseWord) {
//     return "Палиндром"
//   }
//   return "Не палиндром"
// }
//
//
// // +++++
//  let arr = [1,2,3,4,5,6,7,8,9]
//
//
// for (let i = 0; i <arr.length-1; i++) {
//   if (i % 3 === 0) {
//     arr.splice(i++,0,'\n')
//   }
//
// }
// console.log (arr);


let user = "John Doe"
console.log (user);

let student = "Vera"
console.log (student);

user=student
console.log (user);
//user=Vera

let test = 1
++test
console.log (test);
test= test + "1"
console.log (test);
//21
test=test - "1"
console.log (test);
//20
test = true
console.log (test);
//true

let result=1
let arr = [2,3,5,8]
for (let i = 0; i <arr.length; i++){
  result*=arr[i]}
console.log (result);


let matrix= [2, 5, 8, 15, 0, 6, 20, 3]
for (let i=0; i<matrix.length;i++) {
  if ((matrix[i]>5)&&(matrix[i]<10)) {
    console.log (matrix[i]);
  }
}


let mas = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas.length; i++) {
  if (mas[i] % 2 === 0) {
    console.log(mas[i]);
  }
