let string = '이스케이프 문자 이용 줄 바꿈\n GOGO!!';
console.log(string);
let string1 = `문자열은 큰 따옴표("") / 작은 따옴표('')
몽땅 사용이 가능하고 엔터도 사용가능`;
console.log(string1);
let dan = 3;
let gugu = 9;
let string2 = `${dan} * ${gugu} = ${dan * gugu}`;
console.log(string2);
let student = {
    korea : 80,
    english : 90,
    math : 60,
    scienct : 95
}
console.log(student.scienct);
console.log(student['korea']);
let score1 = 90;
let grade = score1 >= 90 ? 'A+' : 'B';
console.log(grade);

let num = 10;
let strnum = '10'
if(String(num) == strnum)
{
    console.log('equals');
}
if(num === strnum) {
    console.log('equals');
}
else {
    console.log('not equals');
}