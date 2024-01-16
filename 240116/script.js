// const gugudan = function gugudan() {
//     for(let i=0;i<10;i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }

// gugudan();

// const gugudanRan = (dan) => {
//     for(let i=0;i<10;i++){
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudanRan();

// const sum = (a=10, b=10) => {
//     console.log(a, b);
// }

// sum();
// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// const result = sum(1, 4);
// console.log(result);

// const aa = (num1, num2) => {
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return;
//     }

//     return num1 + num2;
// }

// let result = aa(3, 7);
// console.log(result);

// const sum = (num1, num2) => num1 + num2;
// const result1 = sum(120, 12389);
// console.log(result1);

// 1분 체크
// function getArrayMaxNumber(arr){
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// const max = getArrayMaxNumber([10, 50, 30]);
// console.log(max);

// scope
// function sum() {
//     let a = 10;
//     console.log(`${a}`);
// }
// sum();
// console.log(`${a}`);
// let a = 10;
// {
//     let b = 20;
//     console.log(`${a}`);
//     console.log(`${b}`);
// }
// console.log(`${a}`);
// console.log(`${b}`);

// var c = 20;
// {
//     var d = 30;
//     console.log(`${c}`);
//     console.log(`${d}`);
// }
// console.log(`${c}`);
// console.log(`${d}`);
// var text = 'outside';
// function printScope(){
//     console.log(text);
//     var text = 'inside';
// }
// printScope();
// (function init(){
//     console.log('initialized');
// })();

// const result = (function(a, b){
//     function init(){
//         return doSum(a, b);
//     }
//     function doSum(a, b){
//         return a + b;
//     }
// })(10, 20);
// console.log(result);
// self check
// function RoundSum(van) {
//     return van * van * 3.14;
// }
// const Sum = RoundSum(3);
// console.log(Sum);
// function MaxArray(arr) {
//     let a = 0;
//     for(let i = 0; i < arr.length ; i++){
//         if(a < arr[i]){
//             a = arr[i];
//         }
//     }

//     return a;
// }
// const adsf = MaxArray([10, 40, 20, 1]);
// console.log(adsf);
// function bmi(weight, height){
//     let k = height / 100;
//     let b = weight / (k * k);

//     if(b > 26){
//         return '비만';
//     } else if( 24 < b < 26){
//         return '과체중';
//     } else if( 18.5 < b < 23) {
//         return '정상';
//     } else if( 18.5 < b) {
//         return '저체중';
//     }
// }

// const adb = bmi(100, 177);
// console.log(adb);

// const person = {
//     name : {
//         first : "GilDong",
//         last : "Hong"
//     },
//     age : 20,
//     likes : ["apple", "samsung"],
//     printHello : function() {
//         return "Hello";
//     }
// }

// console.log(person.name);
// delete person.name;
// console.log(person);         
// const pw = '123';
// if(pw.length < 4){
//     console.log('최소 4자리 이상 되어야 함.');
// }

// const mail = 'joohyun.park@bioinfra.co.kr';
// if(!mail.includes('@')){
//     console.log('이메일 형식');
// }

// if(mail.indexOf('@') !== -1){
//     console.log('shit');
// }

// const arr = [10, 20, 40];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(v){
//     console.log(v);
// })
// console.log(arr);
// const date = new Date();
// console.log(date);
// const dateFormat = `${date.getFullYear()} - ${date.getMonth()} - ${date.getDate()}`;
// console.log(dateFormat);

// function getMaxRandom(max){
//     return Math.floor(Math.random() * max) + 1;
// }
// const MaxRandom = getMaxRandom(20);
// console.log(MaxRandom);

// function getMinMaxRandom(min, max){
//     return Math.floor(Math.random() * (max - min)) + 1 + min;
// }
// const MinMaxRandom = getMinMaxRandom(10, 20);
// console.log(MinMaxRandom);
const arr = [10, 120, 30, 50, 20];

arr.sort(function(a, b){
    if(a < b){
        return 1;
    } else if (a > b){
        return -1;
    } else {
        return 0;
    }
})
console.log(arr[0]);

console.log(arr.sort());
console.log(arr.reverse());