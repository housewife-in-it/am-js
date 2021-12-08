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
}